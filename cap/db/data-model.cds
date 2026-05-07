using { managed } from '@sap/cds/common';
namespace kupit.FlexibleWF;

entity Workflow{
  createdAt  : Timestamp @cds.on.insert : $now;
  createdBy  : String(255) ; 
  modifiedAt : Timestamp @cds.on.insert : $now  @cds.on.update : $now;
  modifiedBy : String(255) ;
  key WorkflowID : Integer64;
  workflow_id  : String;
  subject : String;
  additionalInfo : String;
  fullDescription : LargeString	;
  requesterEmail : String;
  status : String(10);
  ToApprovers : Composition of many Approver
    on ToApprovers.workflow = $self;
  ToMyTasks : Composition of many Approver
    on ToMyTasks.workflow = $self;
  ToComments : Composition of many Comment
    on ToComments.workflow = $self;
  ToAttachments : Composition of many Attachment
    on ToAttachments.workflow = $self;

}

entity Attachment {
  createdAt  : Timestamp @cds.on.insert : $now;
  createdBy  : String(255) ; 
  modifiedAt : Timestamp @cds.on.insert : $now  @cds.on.update : $now;
  modifiedBy : String(255) ;
  key WorkflowID : Integer64 ;
  key counter : Integer;
  filename : String;
  description : String;
  size : Integer;
  documentID : String;
  workflow: Association to Workflow 
    on workflow.WorkflowID = $self.WorkflowID;
}

entity Approver{
  createdAt  : Timestamp @cds.on.insert : $now;
  createdBy  : String(255) ; 
  modifiedAt : Timestamp @cds.on.insert : $now  @cds.on.update : $now;
  modifiedBy : String(255) ;
  key WorkflowID : Integer64 ;
  key level : Integer not null;
  key numb : Integer not null;
  username : String;
  name: String;
  surname: String;
  email: String;
  status: String(10);
  status_date: Timestamp;
  comment: String;
  ID_Posizione: String;
  Descrizione_Posizione: String;
  ToComments : Composition of many Comment
    on ToComments.approver = $self;
  workflow: Association to Workflow 
    on workflow.WorkflowID = $self.WorkflowID;
}

/*view MyTask as SELECT from Approver {
  key WorkflowID,
  key level,
  key numb,
  username,
  name,
  surname,
  status,
  status_date
} where username = $user;*/

entity Comment{
  createdAt  : Timestamp @cds.on.insert : $now;
  createdBy  : String(255) ; 
  modifiedAt : Timestamp @cds.on.insert : $now  @cds.on.update : $now;
  modifiedBy : String(255) ;
  key WorkflowID : Integer64 ;
  key level : Integer not null;
  key numb : Integer not null;
  key counter : Integer;
  text: String;
  approver: Association to Approver 
    on approver.WorkflowID = $self.WorkflowID
   and approver.level = $self.level
   and approver.numb = $self.numb;
  workflow: Association to Workflow 
    on workflow.WorkflowID = $self.WorkflowID;
}

entity Configuration: managed {
  key ID: String;
  key language: String(3);
  content : LargeString	;
}

