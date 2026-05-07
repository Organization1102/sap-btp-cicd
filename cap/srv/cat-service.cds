using kupit.FlexibleWF as my from '../db/data-model';

service CatalogService @(path:'/catalog') @(requires: 'authenticated-user') {
    entity Workflow as projection on my.Workflow{
        *,
        ToApprovers : redirected to Approver
           on ToApprovers.workflow = $self,
        ToMyTasks : redirected to Approver
           on ToMyTasks.workflow = $self
    };

    entity WorkflowAdmin as projection on my.Workflow{
        *,
        ToApprovers : redirected to Approver
           on ToApprovers.workflow = $self,
        ToMyTasks : redirected to Approver
           on ToMyTasks.workflow = $self
    };

    entity Approver as projection on my.Approver{
        *,
        workflow: redirected to Workflow
    };
    entity MyTask as projection on my.Approver{
        *,
        workflow: redirected to Workflow
    };
    entity Comment as projection on my.Comment{
        *,
        approver: redirected to Approver
            on approver.WorkflowID = $self.WorkflowID
            and approver.level = $self.level
            and approver.numb = $self.numb,
        workflow: redirected to Workflow
    };
    entity Attachment as projection on my.Attachment{
        *,
        workflow: redirected to Workflow
    };

    entity Configuration as projection on my.Configuration;

    annotate Approver with @(restrict: [
        { grant: ['READ'], where: 'username = $user OR exists workflow[ createdBy = $user ]' },
        { grant: ['DELETE'], where: 'createdBy = $user' },
        { grant: ['CREATE', 'UPDATE'], where: 'username = $user OR exists workflow[ createdBy = $user ]' } ]);
    annotate MyTask with @(restrict: [
        { grant: ['READ','UPDATE'], where: 'username = $user' } ]);

    annotate Workflow with @(restrict: [
        { grant: ['CREATE'], where: 'createdBy = $user OR exists ToApprovers[username = $user ] ' } ,
        { grant: ['READ', 'UPDATE'], where: `createdBy = $user OR ( status != 'DRAFT' AND exists ToApprovers[username = $user ] )` } 
        
        ]);
    annotate Comment with @(restrict: [
        { grant: ['READ', 'CREATE'], where: 'createdBy = $user OR exists workflow[ createdBy = $user OR exists ToApprovers[username = $user ] ]' } ]);
    annotate Attachment with @(restrict: [
        { grant: ['READ', 'CREATE'], where: 'createdBy = $user OR exists workflow[ createdBy = $user OR exists ToApprovers[username = $user ] ]' } 
        ]);

    type pdfResult {
        status: String;
        message: String;
        pdfContent: String;
    }

    type genResult {
        status: String;
        message: String;
        content: String;
    }

    //action generatePdf( htmlContent : String ) returns pdfResult;
    function generatePdf( hanaId : Integer ) returns pdfResult;
    function sendMail( hanaId : Integer, level: Integer ) returns String;
    function sendMailRequester( hanaId : Integer ) returns String;
    function sendTeams( hanaId : Integer, level: Integer ) returns String;
    function setTaskPending( hanaId : Integer, level: Integer ) returns String;

    action WDUser( wdBodyString: String ) returns genResult;

    function getDMSRepositoryId( ) returns String;
    function getDMSObjectId( ) returns String;
    function getADGroupId( ) returns String;


}