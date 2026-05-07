const { transaction, tx } = require("@sap/cds");
const cds = require("@sap/cds");
const htmlPdf = require("html-pdf"); 
const sdk = require("@sap-cloud-sdk/http-client");
const conn = require("@sap-cloud-sdk/connectivity");

const dayjs = require('dayjs')
//import { connect } from 'http2';

const SequenceHelper = require("./lib/SequenceHelper");
const {join, resolve} = require('path');
const { json } = require("express");

//const SapCfMailer = require('sap-cf-mailer').default;
//const transporter = new SapCfMailer("mail_test_2");

const SapCfAxios = require('sap-cf-axios').default;
const axiosBotService = SapCfAxios("bot_service");

const axiosEmailService = SapCfAxios("mailGraph");

//const workdayService = SapCfAxios("WORKDAY_CPI_TOKEN");

//process.env.PUPPETEER_CACHE_DIR = join(__dirname, '.cache', 'puppeteer');
//"postinstall": "PUPPETEER_CACHE_DIR=$(pwd)/.cache/puppeteer node node_modules/puppeteer/install.js"

//const puppeteer = require('puppeteer');
//process.env.CHROME_BIN = puppeteer.executablePath();


module.exports = cds.service.impl(async (service) => {
    const db = await cds.connect.to("db");
    const Workflow = service.entities.Workflow;
    const Approver = service.entities.Approver;
    const Attachment = service.entities.Attachment;
    const Comment = service.entities.Comment;
    service.before("CREATE", Workflow, async (context) => {
        const newId = new SequenceHelper({
          db: db,
          sequence: "WorkflowSeq",
          table: "kupit_FlexibleWF_Workflow",
          field: "WorkflowID",
        });
    
        context.data.WorkflowID = await newId.getNextNumber();
        context.data.createdBy = context.data.modifiedBy = context.user.id;
        
    });

    service.before("UPDATE", Workflow, async (context) => {
        context.data.modifiedBy = context.user.id;
    });

    service.before("CREATE", Approver, async (context) => {
        context.data.numb = await new Promise((resolve, reject) => {
            let nextNumber = 0;
            db.run(`SELECT NUMB FROM kupit_FlexibleWF_Approver WHERE WorkflowID = ${context.data.WorkflowID} AND level = ${context.data.level} ORDER BY NUMB asc`)
                .then(result => {
                    var lastnum = 0;
                    var diff = 0;
                    nextNumber = 0;
                    for (var i=0;i<result.length;i++){
                        nextNumber = parseInt(result[i][`NUMB`]+"") ;
                        diff = nextNumber - lastnum ;
                        if (nextNumber > lastnum && diff > 1){
                            resolve(lastnum+1);
                        }
                        lastnum = nextNumber;
                    }
                    if (nextNumber <8){
                        resolve(nextNumber+1);
                    } else {
                        resolve(nextNumber);
                    }
                })
                .catch(error => {
                    reject(error);
                });    
        });
        context.data.createdBy = context.data.modifiedBy = context.user.id;
    });

    service.before("UPDATE", Approver, async (context) => {
        context.data.modifiedBy = context.user.id;
        context.data.status_date = new Date();
    });

    service.before("CREATE", Comment, async (context) => {
        context.data.counter = await new Promise((resolve, reject) => {
            let nextNumber = 0;
            db.run(`SELECT IFNULL(MAX(COUNTER),0) FROM kupit_FlexibleWF_Comment WHERE WorkflowID = ${context.data.WorkflowID} AND level = ${context.data.level} AND numb = ${context.data.numb}`)
                .then(result => {
                    nextNumber = parseInt(result[0][`IFNULL(MAX(COUNTER),0)`]) + 1 ;
                    resolve(nextNumber);
                })
                .catch(error => {
                    reject(error);
                });
        });
        context.data.createdBy = context.data.modifiedBy = context.user.id;
	});

    service.before("UPDATE", Comment, async (context) => {
        context.data.modifiedBy = context.user.id;
    });

    service.before("CREATE", Attachment, async (context) => {
        context.data.counter = await new Promise((resolve, reject) => {
            let nextNumber = 0;
            db.run(`SELECT IFNULL(MAX(COUNTER),0) FROM kupit_FlexibleWF_Attachment WHERE WorkflowID = ${context.data.WorkflowID}`)
                .then(result => {
                    nextNumber = parseInt(result[0][`IFNULL(MAX(COUNTER),0)`]) + 1 ;
                    resolve(nextNumber);
                })
                .catch(error => {
                    reject(error);
                });
        });
        context.data.createdBy = context.data.modifiedBy = context.user.id;
	});

    service.before("UPDATE", Attachment, async (context) => {
        context.data.modifiedBy = context.user.id;
    });
    /*service.on("generatePdf", async(req) => {
        console.log ("CUST ");
        console.log (req.data);
        var { htmlContent }  = req.data;

        try { 
            const browser = await puppeteer.launch({ headless: true });
            const page = await browser.newPage();
            await page.setContent(htmlContent);
            const pdf = await page.pdf({ format: 'A4' });
            
            await page.close();
            await browser.close();

            return({ status : "OK", message : "OK", pdfContent : pdf.toString('base64')});

        } catch (error) { 
        console.log("error while converting html-to-PDF", error); 
        } 
    });*/

    service.on("generatePdf", async(req) => {
        console.log ("CUST ");
        console.log (req.data);
        var { hanaId }  = req.data;

        var userRole ="";
        var approvers = await SELECT.from(service.entities.Approver).where({ WorkflowID: hanaId});
        var workflowHana = await SELECT.one.from(service.entities.Workflow).where({ WorkflowID: hanaId }); //, level: params.level, numb: params.number });
        var aComments = await SELECT.one.from(service.entities.Comment).where({ WorkflowID: hanaId });
        
        if (workflowHana.fullDescription == null || workflowHana.fullDescription == undefined ){
            workflowHana.fullDescription = "";
        }

        var fullDescr = workflowHana.fullDescription.replace(/<p>/g,'<p style="word-spacing: 5px;">');

        var htmlCont = "<!DOCTYPE html><html><head><title>Summary</title>"+
        "<style>"+
              "body {	font-family: Arial;	font-variant: normal; font-size: 12px;}"+
            "p {word-spacing: 5px; }"+
            "table, th, td {"+
                "border: 1px solid black;"+
                "border-collapse: collapse;"+
                "min-width: 100px;"+
                "padding: 3px;"+
            "}"+
            "td.large {"+
                "min-width: 300px;"+
            "}"+
            "td.descrPos {"+
                "max-width: 300px;"+
            "}"+
            "td.approvalHead {"+
                "font-weight: bold;"+
            "}"+
            "h1 {"+
                "font-size: 24px;"+
                "line-height: 4vw;"+
            "}"+
            "footRight {"+
                "display: flex;"+
                "justify-content: flex-end;"+
                "margin-left: auto;"+
                "margin-right: 0;"+
            "}"+
        "</style>"+
        "</head><body>"+
        "<div id=\"capturePdfDown\" >"+
        "<img src=\"data:image/jpeg;base64,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\"/>"+
        "<table style=\"border: 1px solid black;\">"+
            "<tr><td class=\"approvalHead\">Flexible workflow ID</td><td>"+workflowHana.WorkflowID+"</td></tr>"+
            "<tr><td class=\"approvalHead\">Subject</td><td>"+workflowHana.subject+"</td></tr>"+
            "<tr><td class=\"approvalHead\">Additional info</td><td class=\"large\">"+workflowHana.additionalInfo+"</td></tr>"+
            "<tr><td class=\"approvalHead\">Full description</td><td class=\"large\">"+fullDescr+"</td></tr>"+
        "</table><br/><br/>";

        htmlCont = htmlCont +
        "<table>";
        htmlCont = htmlCont +
                "<tr><td class=\"approvalHead\" colspan=\"4\">Requester</td></tr>";
        htmlCont = htmlCont +
                "<tr><td colspan=\"2\">"+workflowHana.createdBy+"</td><td class=\"descrPos\" colspan=\"2\">"+userRole+"</td></tr>";

        var currentLevel = 0;
        for (var a=0;a<approvers.length;a++){
            var approver = approvers[a];
            var apprStatus = ((approver.status == null || approver.status == undefined || approver.status == "") ? "" : approver.status );
            var apprDate = ((approver.status_date == null || approver.status_date == undefined || approver.status_date == "" || approver.status_date == new Date(0)) ? "" : (new Date(approver.status_date)).getFullYear()+"/"+((new Date(approver.status_date)).getMonth()+1)+"/"+(new Date(approver.status_date)).getDate() );
            if (approver.level != currentLevel){
                htmlCont = htmlCont +
                "<tr><td class=\"approvalHead\" colspan=\"4\">Approval Level "+approver.level+"</td></tr>";

            }
            htmlCont = htmlCont +
                "<tr><td>"+approver.name+" "+approver.surname+"</td><td class=\"descrPos\">"+approver.Descrizione_Posizione+"</td><td>"+apprStatus+"</td><td>"+apprDate+"</td></tr>";
        }
        htmlCont = htmlCont +
        "</table>";

        var today = dayjs().format('DD/MM/YYYY HH:mm:ss [U][T][C]Z') 

        htmlCont = htmlCont +
        "</div>"+
        "<div id=\"pageFooter\"><table style=\"border: none;font-size: 10px;\"><tr style=\"border: none;\"><td  style=\"border: none;\" class=\"large\"></td><td  style=\"border: none;\">Created on "+today+"</td></tr></table></div></div>"+
        "</body></html>";
        //console.log ("htmlCont ",htmlContent);

        try { 
            const htm1ToPdfOptions = { 
                childProcessOptions: {
                    env: {
                      OPENSSL_CONF: '/dev/null',
                    },
                  },
                "type": "pdf", // allowed file types: png, jpeg, pdf 
                //"height": "650px", // allowed units: mm, cm, in, px 
                //"width": "850px", // allowed units: mm, cm, in, px 
                "renderDelay": 2000, 
                "format": "A4",        // allowed units: A3, A4, A5, Legal, Letter, Tabloid
                "orientation": "portrait", // portrait or landscape
            };

            //const myHtml = htmlContent+"";

            var waitPdf= await new Promise(async function(resolve){
                htmlPdf.create(htmlCont, htm1ToPdfOptions) 
                .toBuffer(function(err, buffer){
                    //console.log('Bufferrrrrr ', buffer);
                    console.log('This is a buffer:', Buffer.isBuffer(buffer));
                    if (buffer == undefined){
                        console.log("error while converting html-to-PDF", err); 
                        resolve({ status : "KO", message : err});
                    }
                    resolve({ status : "OK", message : buffer});
                    
                });
            }.bind(this));  

            return({ status : waitPdf.status, message : "OK", pdfContent : waitPdf.message.toString('base64')});

            /*req._.res.set('Content-Type', 'application/pdf');
            req._.res.send(pdf);*/
            

        } catch (error) { 
        console.log("error while converting html-to-PDF", error); 
        } 
    });

    service.on("generatePdfOld", async(req) => {
        console.log ("CUST ");
        console.log (req.data);
        var { htmlContent }  = req.data;

        //console.log ("htmlCont ",htmlContent);

        try { 
            const htm1ToPdfOptions = { 
                childProcessOptions: {
                    env: {
                      OPENSSL_CONF: '/dev/null',
                    },
                  },
                "type": "pdf", // allowed file types: png, jpeg, pdf 
                //"height": "650px", // allowed units: mm, cm, in, px 
                //"width": "850px", // allowed units: mm, cm, in, px 
                "renderDelay": 2000, 
                "format": "A4",        // allowed units: A3, A4, A5, Legal, Letter, Tabloid
                "orientation": "portrait", // portrait or landscape
            };

            //const myHtml = htmlContent+"";

            var waitPdf= await new Promise(async function(resolve){
                htmlPdf.create(htmlContent, htm1ToPdfOptions) 
                .toBuffer(function(err, buffer){
                    //console.log('Bufferrrrrr ', buffer);
                    console.log('This is a buffer:', Buffer.isBuffer(buffer));
                    if (buffer == undefined){
                        console.log("error while converting html-to-PDF", err); 
                        resolve({ status : "KO", message : err});
                    }
                    resolve({ status : "OK", message : buffer});
                    
                });
            }.bind(this));  

            return({ status : waitPdf.status, message : "OK", pdfContent : waitPdf.message.toString('base64')});

            /*req._.res.set('Content-Type', 'application/pdf');
            req._.res.send(pdf);*/
            

        } catch (error) { 
        console.log("error while converting html-to-PDF", error); 
        } 
    });

    service.on("WDUser", async(req) => {

        var { wdBodyString }  = req.data;

        var wdBody = JSON.parse(wdBodyString); 

        var ccccc = await conn.getDestinationFromDestinationService(
            {
              destinationName: 'WORKDAY_CPI'
            }
          );

        //console.log("ccccc "+JSON.stringify(ccccc));

        // var result = await workdayService({
        //     method: 'GET',
        //     url: ''
        // });

        // console.log(JSON.stringify(result.data));

        var resultData = ccccc;

        if ( resultData.url!= undefined && resultData.authTokens!= undefined ){
            var wdUrl = resultData.url + "/CR_Get_Position_Details";
            var vToken = "Bearer " + resultData.authTokens[0].value;
            var respWD = await sdk.executeHttpRequestWithOrigin({
                url: wdUrl
            }, {
                method: 'POST',
                headers: {
                    custom: { Authorization: vToken },
                },
                data: wdBody
            }, {
                fetchCsrfToken: false
            });

            //console.log(JSON.stringify(respWD.data));

            return({ status : respWD.status, message : "OK", content : JSON.stringify(respWD.data)});
        } else {
            return({ status : respWD.status, message : "KO", content : JSON.stringify(result.data)});
        }
    });


    service.on("sendMailOldOld", async(req) => {
        var { htmlContent, subject, recipients }  = req.data;

        const result = await transporter.sendMail({
            to: recipients,
            subject: subject,
            html: htmlContent
        });
    
        return(result);
    });

    service.on("sendMailOld", async(req) => {
        var context = req.data;

        var { hanaId, level }  = req.data;

        console.log ("params "+JSON.stringify(req.params));
        console.log ("dataaaa  "+JSON.stringify(context));

        //const aWorkflow = await SELECT.from(service.entities.Workflow).where({ WorkflowID: params.hana_id });

        //console.log (aWorkflow);

        var aTasks = await SELECT.from(service.entities.Approver).where({ WorkflowID: hanaId, level: level });
        var aWorkflow = await SELECT.one.from(service.entities.Workflow).where({ WorkflowID: hanaId }); //, level: params.level, numb: params.number });
        var aContent = await SELECT.one.from(service.entities.Configuration).where({ ID: 'EMAIL_TEMPLATE' });
        var results = new Array();


        if ( aTasks!= null && aTasks!=undefined ) {
            for( var i=0;i<aTasks.length;i++){
                var aContentTmp = aContent.content+"";
                aContentTmp = aContentTmp.replace("[hana_id]",aTasks[i].WorkflowID)+"";
                aContentTmp = aContentTmp.replace("[level]",aTasks[i].level)+"";
                aContentTmp = aContentTmp.replace("[number]",aTasks[i].numb)+"";
                aContentTmp = aContentTmp.replace("[fullDescription]",aWorkflow.fullDescription)+"";
                aContentTmp = aContentTmp.replace("[subject]",aWorkflow.subject)+"";
                aContentTmp = aContentTmp.replace("[additionalInfo]",aWorkflow.additionalInfo)+"";
        
                var result = await transporter.sendMail({
                    to: aTasks[i].username,
                    subject: aWorkflow.subject,
                    html: aContentTmp
                });
                results.push({number: aTasks[i].numb, result: result});
            }
        }
    
        return(JSON.stringify(results));
    });

    service.on("sendMail", async(req) => {
        var context = req.data;

        var { hanaId, level }  = req.data;

        console.log ("params "+JSON.stringify(req.params));
        console.log ("dataaaa  "+JSON.stringify(context));

        //const aWorkflow = await SELECT.from(service.entities.Workflow).where({ WorkflowID: params.hana_id });

        //console.log (aWorkflow);

        var aTasks = await SELECT.from(service.entities.Approver).where({ WorkflowID: hanaId, level: level });
        var aWorkflow = await SELECT.one.from(service.entities.Workflow).where({ WorkflowID: hanaId }); //, level: params.level, numb: params.number });
        var aContent = await SELECT.one.from(service.entities.Configuration).where({ ID: 'EMAIL_TEMPLATE' });
        var results = new Array();

        if (aContent == null || aContent == undefined){
            aContent = { content: ""};
        }


        if ( aTasks!= null && aTasks!=undefined ) {
            for( var i=0;i<aTasks.length;i++){
                var aContentTmp = aContent.content+"";
                aContentTmp = aContentTmp.replace("[hana_id]",aTasks[i].WorkflowID)+"";
                aContentTmp = aContentTmp.replace("[level]",aTasks[i].level)+"";
                aContentTmp = aContentTmp.replace("[number]",aTasks[i].numb)+"";
                aContentTmp = aContentTmp.replace("[fullDescription]",aWorkflow.fullDescription)+"";
                aContentTmp = aContentTmp.replace("[subject]",aWorkflow.subject)+"";
                aContentTmp = aContentTmp.replace("[additionalInfo]",aWorkflow.additionalInfo)+"";
        
                var bodyEmail = { 
                        message : {
                            toRecipients: [{ 
                                emailAddress: { 
                                    address : aTasks[i].username
                                }
                            }],
                            subject: aWorkflow.subject,
                            body: {
                                contentType : "HTML",
                                content: aContentTmp
                            }
                        },
                        saveToSentItems : "false"
                };

                var result = await axiosEmailService({
                    method: 'POST',
                    url: '',
                    data: bodyEmail,
                    headers: {
                        "content-type": "application/json"
                    }
                });

                results.push({number: aTasks[i].numb, data: result.data, status: result.status, statusText: result.statusText});
            }
        }
    
        return(JSON.stringify(results));
    });


    service.on("sendMailRequester", async(req) => {
        var context = req.data;

        var { hanaId }  = req.data;

        //console.log ("params "+JSON.stringify(req.params));
        //console.log ("dataaaa  "+JSON.stringify(context));

        //const aWorkflow = await SELECT.from(service.entities.Workflow).where({ WorkflowID: params.hana_id });

        //console.log (aWorkflow);

        var aWorkflow = await SELECT.one.from(service.entities.Workflow).where({ WorkflowID: hanaId }); //, level: params.level, numb: params.number });
        var aContent = await SELECT.one.from(service.entities.Configuration).where({ ID: 'EMAIL_FINAL_TEMPLATE' });
        var aSubject = await SELECT.one.from(service.entities.Configuration).where({ ID: 'EMAIL_FINAL_SUBJECT' });
        var results = new Array();

        if (aContent == null || aContent == undefined){
            aContent = { content: ""};
        }

        if (aSubject == null || aSubject == undefined){
            aSubject = { content: ""};
        }



                var aContentTmp = aContent.content+"";
                var aSubjectTmp = aSubject.content+"";
                aContentTmp = aContentTmp.replace("[hana_id]",aWorkflow.WorkflowID)+"";
                aContentTmp = aContentTmp.replace("[workflowStatus]",aWorkflow.status)+"";
                aContentTmp = aContentTmp.replace("[fullDescription]",aWorkflow.fullDescription)+"";
                aContentTmp = aContentTmp.replace("[subject]",aWorkflow.subject)+"";
                aContentTmp = aContentTmp.replace("[additionalInfo]",aWorkflow.additionalInfo)+"";

                aSubjectTmp = aSubjectTmp.replace("[hana_id]",aWorkflow.WorkflowID)+"";
                aSubjectTmp = aSubjectTmp.replace("[workflowStatus]",aWorkflow.status)+"";
                aSubjectTmp = aSubjectTmp.replace("[fullDescription]",aWorkflow.fullDescription)+"";
                aSubjectTmp = aSubjectTmp.replace("[subject]",aWorkflow.subject)+"";
                aSubjectTmp = aSubjectTmp.replace("[additionalInfo]",aWorkflow.additionalInfo)+"";

                var bodyEmail = { 
                        message : {
                            toRecipients: [{ 
                                emailAddress: { 
                                    address : aWorkflow.requesterEmail
                                }
                            }],
                            subject: aSubjectTmp,
                            body: {
                                contentType : "HTML",
                                content: aContentTmp
                            }
                        },
                        saveToSentItems : "false"
                };

                var result = await axiosEmailService({
                    method: 'POST',
                    url: '',
                    data: bodyEmail,
                    headers: {
                        "content-type": "application/json"
                    }
                });

                results.push({number: aWorkflow.WorkflowID, data: result.data, status: result.status, statusText: result.statusText});

    
        return(JSON.stringify(results));
    });

    service.on("sendTeams", async(req) => {
        var context = req.data;

        var { hanaId, level }  = req.data;

        console.log ("params "+JSON.stringify(req.params));
        console.log ("dataaaa  "+JSON.stringify(context));

        //const aWorkflow = await SELECT.from(service.entities.Workflow).where({ WorkflowID: params.hana_id });

        //console.log (aWorkflow);

        var aTasks = await SELECT.from(service.entities.Approver).where({ WorkflowID: hanaId, level: level });
        var aWorkflow = await SELECT.one.from(service.entities.Workflow).where({ WorkflowID: hanaId }); //, level: params.level, numb: params.number });
        var aContent = await SELECT.one.from(service.entities.Configuration).where({ ID: 'TEAMS_TEMPLATE' });
        var results = new Array();

        if (aContent == null || aContent == undefined){
            aContent = { content: ""};
        }


        if ( aTasks!= null && aTasks!=undefined ) {
            for( var i=0;i<aTasks.length;i++){
                var aContentTmp = aContent.content+"";
                aContentTmp = aContentTmp.replace("[hana_id]",aTasks[i].WorkflowID)+"";
                aContentTmp = aContentTmp.replace("[level]",aTasks[i].level)+"";
                aContentTmp = aContentTmp.replace("[number]",aTasks[i].numb)+"";
                aContentTmp = aContentTmp.replace("[fullDescription]",aWorkflow.fullDescription)+"";
                aContentTmp = aContentTmp.replace("[subject]",aWorkflow.subject)+"";
                aContentTmp = aContentTmp.replace("[additionalInfo]",aWorkflow.additionalInfo)+"";
                
                console.log ("content "+aContentTmp);

                    var body = {
                        MAIL_ID: aTasks[i].email,
                        TITLE: aWorkflow.subject,
                        MESSAGE: aContentTmp
                    };

                console.log ("body "+JSON.stringify(body));

                var response = await axiosBotService({
                        method: 'POST',
                        url: '/em/card',
                        data: body,
                        headers: {
                            "content-type": "application/json"
                        }
                    });
                results.push({number: aTasks[i].numb, data: response.data, status: response.status, statusText: response.statusText});
                //console.log("response "+JSON.stringify(response.data));
            }
        }
    
        return(JSON.stringify(results));
    });

    service.on("setTaskPending", async(req) => {
        var { hanaId, level }  = req.data;
        console.log("sto settando pending");
        var res = await UPDATE(service.entities.Approver).with({ "status" : "PENDING"  }).where({ WorkflowID: hanaId, level: level });
    
        return (JSON.stringify(res));
    });

    service.on("getDMSRepositoryId", async(req) => {
        return process.env.dmsRepositoryId;
    });
    
    service.on("getDMSObjectId", async(req) => {
        return process.env.dmsObjectId;

    });

    service.on("getADGroupId", async(req) => {
        return process.env.adGroupId;
    });
});