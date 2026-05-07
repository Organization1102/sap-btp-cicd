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

var totalApproved = 0;
var totalEnabled = 0;

for (var j=1;j<9;j++){
	if ( $.context['approver_'+j] != null && $.context['approver_'+j] != undefined ) {
		if ( $.context['approver_'+j].approvalStatus == "APPROVED" ) {
			totalApproved = totalApproved + 1;
		}
		totalEnabled = totalEnabled + 1;

	}
}

if ( totalApproved == totalEnabled  && totalEnabled > 0){
	$.context.skipNext = false;
} else {
	$.context.skipNext = true;
}