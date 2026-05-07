/*
// read from existing workflow context 
var productInfo = $.context.productInfo; 
var productName = productInfo.productName; 
var productDescription = productInfo.productDescription;

// read contextual information
var taskDefinitionId = $.info.taskDefinitionId;

// read user task information
var lastUserTask1 = $.usertasks.usertask1.last;
var userTaskSubject = lastUserTask1.subject;
var userTaskProcessor = lastUserTask1.processor;
var userTaskCompletedAt = lastUserTask1.completedAt;

var userTaskStatusMessage = " User task '" + userTaskSubject + "' has been completed by " + userTaskProcessor + " at " + userTaskCompletedAt;

// create new node 'product'
var product = {
		productDetails: productName  + " " + productDescription,
		workflowStep: taskDefinitionId
};

// write 'product' node to workflow context
$.context.product = product;
*/

$.context.level1.lvl_number = "1";
$.context.level2.lvl_number = "2";
$.context.level3.lvl_number = "3";

for (var i=1;i<4;i++){
	var approvers=8;
	for (var j=1;j<9;j++){
		if ($.context['level'+i]['approver_'+j] == undefined || $.context['level'+i]['approver_'+j] == null){
			approvers = approvers - 1;
		}
	}
	if (approvers == 0){
		$.context['level'+i].skip = true;
	}
}

for (var i=1;i<4;i++){
	if ($.context["level"+i] != null && $.context["level"+i] != undefined){
		for (var j=1;j<9;j++){
			if ($.context["level"+i]["approver_"+j] != null && $.context["level"+i]["approver_"+j] != undefined ){
				if ($.context["level"+i]["approver_"+j].email != null && $.context["level"+i]["approver_"+j].email != undefined){
					var title = "Flexible WF " + $.context.hana_id + " alla tua approvazione";
					var message = "Gentile collega, c'è un task da approvare";
					var body = {
						MAIL_ID: $.context["level"+i]["approver_"+j].email,
						TITLE: title,
						MESSAGE: message
					}
					$.context["level"+i]["approver_"+j].teamsBody = body;
				} else {
					$.context["level"+i]["approver_"+j].teamsBody = null;
				}
			}
		}

	}
}


