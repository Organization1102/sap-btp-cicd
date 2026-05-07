{
	"contents": {
		"1d10a815-5402-4bc8-9417-5d370b5eaee1": {
			"classDefinition": "com.sap.bpm.wfs.Model",
			"id": "kupit.flexiblewf.flexiblewfparallel",
			"subject": "FlexibleWFParallel",
			"name": "FlexibleWFParallel",
			"documentation": "Flexible Workflow",
			"lastIds": "62d7f4ed-4063-4c44-af8b-39050bd44926",
			"events": {
				"11a9b5ee-17c0-4159-9bbf-454dcfdcd5c3": {
					"name": "StartEvent1"
				},
				"2798f4e7-bc42-4fad-a248-159095a2f40a": {
					"name": "EndEvent1"
				},
				"3a1ad685-00b4-4e74-a709-d871bbb6e4df": {
					"name": "EndEvent2"
				}
			},
			"activities": {
				"afb40722-a2cb-46a0-ac76-9725d6d3ccd7": {
					"name": "EnterLevel1"
				},
				"6dd1a6e9-2039-4a17-985a-928324df9a57": {
					"name": "ExitLevel1"
				},
				"b6adeb7e-5b5f-4358-8367-6d5195b0871a": {
					"name": "CheckExist_1"
				},
				"c25778cd-e88e-4cde-8318-716f13182a84": {
					"name": "EndCheck_1"
				},
				"f8701e64-29c8-4316-93ee-d61413b29c37": {
					"name": "Approvatore_1"
				},
				"53d2c78c-6340-4f3d-abcf-d98a8cbf1114": {
					"name": "CheckExist_2"
				},
				"95616ca5-42da-483e-be29-9e4cb82da96a": {
					"name": "EndCheck_2"
				},
				"7cd9b3e0-8463-4159-89b3-f15c47a88dae": {
					"name": "CheckExist_3"
				},
				"c78185af-1024-4827-ab0c-451ea03b6f95": {
					"name": "EndCheck_3"
				},
				"02bcabea-8d91-4876-8671-cf8d7ad31459": {
					"name": "Approvatore_2"
				},
				"cbc61ef0-28d4-4b92-a4c6-09653d08e65a": {
					"name": "Approvatore_3"
				},
				"2f3b5be5-bf42-4589-9c88-01bd8ff21794": {
					"name": "Approvatore_4"
				},
				"b8a30d1a-104e-466d-99d5-cb8d4a119aca": {
					"name": "Approvatore_5"
				},
				"488cf143-911f-4906-a1e1-2ecb89f4b30a": {
					"name": "Approvatore_6"
				},
				"f21ae3c9-9dd3-4ded-a8ed-49f4fdb48610": {
					"name": "Approvatore_7"
				},
				"e21aa586-1a46-49d0-bf1a-b871059179c8": {
					"name": "Approvatore_8"
				},
				"dee8c3dd-d603-4638-a772-8419e3e674ad": {
					"name": "CheckExist_4"
				},
				"7882d0ea-3e20-4495-80cd-1e4b047a623a": {
					"name": "EndCheck_4"
				},
				"058f391d-36ff-449a-acf7-33c67f9df26f": {
					"name": "CheckExist_5"
				},
				"5292c005-e98f-4d1a-b843-757e6a896ca5": {
					"name": "EndCheck_5"
				},
				"1c468989-885e-40a6-86f8-2424867063af": {
					"name": "CheckExist_6"
				},
				"7e5f2dd5-90fa-4125-80ba-bd611647bc3f": {
					"name": "EndCheck_6"
				},
				"d7b3e6e6-1e2e-4118-b297-2ccb22582a70": {
					"name": "CheckExist_7"
				},
				"b49db90c-d9a6-4b01-b3e9-f68df3545fa6": {
					"name": "EndCheck_7"
				},
				"5af2cc0a-d6f2-4323-9b20-53f92c8e1c4d": {
					"name": "CheckExist_8"
				},
				"1adfd1e2-4072-4a99-b6c0-944d516f1835": {
					"name": "EndCheck_8"
				},
				"8e3e3683-8559-4672-bff6-255bd3c88b8e": {
					"name": "CheckLevelEmpty"
				},
				"cf01cf43-9c57-45c4-a7d8-26978f858471": {
					"name": "EndCheckLevelEmpty"
				},
				"cdeb5c9f-4521-41ee-9890-064ee3bca80f": {
					"name": "ScriptTask2"
				},
				"d2d88835-8b62-49b6-9b72-ffbef218e692": {
					"name": "ParallelGateway6"
				},
				"4f5737ad-7646-4347-8e41-4a03895d8e42": {
					"name": "ParallelGateway14"
				},
				"5fa83431-3f32-49ed-8443-fc5308b9275f": {
					"name": "ParallelGateway15"
				},
				"c0b425b8-75b6-42cb-b79c-a0dc3beb0fa4": {
					"name": "ParallelGateway16"
				},
				"87745008-4217-4157-aae3-e39c5243da05": {
					"name": "ParallelGateway17"
				},
				"ac22a0d2-4936-4441-8ef5-ce98b9949c24": {
					"name": "ParallelGateway18"
				},
				"bd7c7a68-29c0-483f-9067-52c142105c6c": {
					"name": "ParallelGateway19"
				},
				"96824a9e-1300-4901-9d5e-06dc260131d6": {
					"name": "ParallelGateway20"
				},
				"a86fc885-fe92-4b5e-a79d-aab76291a99c": {
					"name": "SendAllEmails"
				},
				"e6119cd1-7adb-4461-80df-cc2990d6c532": {
					"name": "SendAllTeams"
				},
				"2c3c2ec0-ae4b-48e0-b816-e10c5e97c0d9": {
					"name": "SetAllTaskPending"
				}
			},
			"sequenceFlows": {
				"c6b99f32-5fe6-4ab6-b60a-80fba1b9ae0f": {
					"name": "SequenceFlow1"
				},
				"c91a3742-861b-4bfa-a705-523e8e0cd71f": {
					"name": "SequenceFlow2"
				},
				"497cedb6-87b5-4223-8b56-1ff5000ebd06": {
					"name": "SequenceFlow4"
				},
				"658d2874-2c30-44f1-928f-a08049303273": {
					"name": "ApprAction_1"
				},
				"aa9035e5-18ad-448f-8f81-b09a968fd567": {
					"name": "SequenceFlow6"
				},
				"26543276-a737-44f9-a141-bab1698ffead": {
					"name": "SequenceFlow7"
				},
				"42ad242d-747d-406d-94f7-ff29e2567ae0": {
					"name": "ApprSkip_1"
				},
				"1c8dc214-597b-4c74-b699-89d90684fe33": {
					"name": "SequenceFlow11"
				},
				"54f7c08d-041a-4af1-a4cd-4b4c315dfc35": {
					"name": "SequenceFlow12"
				},
				"ae5a25c2-a409-47bf-9607-77f7524bb2ea": {
					"name": "SequenceFlow13"
				},
				"5dcf7254-6517-4db7-8ab5-45302233742f": {
					"name": "SequenceFlow14"
				},
				"9346d3ba-8111-4e3b-8b36-fe5aa0992460": {
					"name": "ApprSkip_2"
				},
				"45eb27dd-5651-44be-bb55-59564e00112b": {
					"name": "ApprSkip_3"
				},
				"aa80369e-7de4-44ff-bd5d-a3bbcdf46de7": {
					"name": "SequenceFlow17"
				},
				"3abe3449-52f4-4e98-9018-644841f7df15": {
					"name": "SequenceFlow18"
				},
				"b13147e8-0f96-4e3b-b863-c7c2adbb3e7d": {
					"name": "SequenceFlow24"
				},
				"e9219f80-c646-483f-9b3e-889fc279392c": {
					"name": "SequenceFlow25"
				},
				"8a26702e-39f2-40ab-9f42-126e44b2bff5": {
					"name": "SequenceFlow26"
				},
				"b42b2ec8-8bee-45e3-89ff-d2e0bdeb21c1": {
					"name": "SequenceFlow27"
				},
				"008fa70c-9cb3-474d-9411-15960ccc30d3": {
					"name": "SequenceFlow28"
				},
				"b8121ac3-efb3-4cf7-a6bc-625c3d29f899": {
					"name": "SequenceFlow29"
				},
				"6b0c9026-853f-4e9d-a260-a9a52b956bef": {
					"name": "SequenceFlow30"
				},
				"61836292-3ef0-4388-9b78-c927a2e3afc8": {
					"name": "SequenceFlow31"
				},
				"52a3b1c6-23b1-436a-a87c-fcca5f5df7ce": {
					"name": "SequenceFlow32"
				},
				"6aec8ddb-711f-4139-940f-962edcdf504e": {
					"name": "SequenceFlow33"
				},
				"4b043c97-5cb1-4d06-842f-c2f1f52ab28c": {
					"name": "ApprSkip_4"
				},
				"54ae69ff-41c4-4bde-93a0-394327249077": {
					"name": "ApprSkip_5"
				},
				"c923719a-7bc3-4bba-bfe9-90e06d7d2386": {
					"name": "ApprSkip_6"
				},
				"72ea2028-b339-469c-bf19-3efa52908865": {
					"name": "ApprSkip_7"
				},
				"5dd1a722-36f3-45a3-b0aa-6178251ab7ba": {
					"name": "ApprSkip_8"
				},
				"579eaa5d-209f-45b6-98aa-e1aadea45206": {
					"name": "SequenceFlow39"
				},
				"e7f0a68a-75aa-453a-b90e-9f303de631a5": {
					"name": "SequenceFlow40"
				},
				"85d973e0-932f-4319-857d-aee77a9a12f7": {
					"name": "SequenceFlow41"
				},
				"f4cc5e80-05d4-4e83-8643-d00e5878e7ff": {
					"name": "SequenceFlow42"
				},
				"f0162dd0-c3dc-47cc-b30a-2ac005d9f1a6": {
					"name": "SequenceFlow43"
				},
				"f26aa50a-7aff-4cf7-977a-86dc670e72cd": {
					"name": "LevelNotEmpty"
				},
				"8505e222-5e24-41e9-9b19-11a2a7bdf72f": {
					"name": "SequenceFlow45"
				},
				"3799fafa-38cb-4f57-926e-ac11a9937e4d": {
					"name": "LevelIsEmpty"
				},
				"4f2fd127-009e-4c3a-822e-b07e7236c97d": {
					"name": "SequenceFlow51"
				},
				"5775a767-e4eb-49f7-ae65-0f1cf6292be6": {
					"name": "SequenceFlow53"
				},
				"a58b8c05-8770-477e-8667-f62ac2b9d77a": {
					"name": "SequenceFlow95"
				},
				"091d0eb7-0555-461c-8771-c6f6cf8e3bd6": {
					"name": "SequenceFlow96"
				},
				"0a8e7262-c324-47e8-9291-9562d2bb57cb": {
					"name": "SequenceFlow97"
				},
				"878fd8c8-37a7-42aa-bf4a-c05fb15a90f2": {
					"name": "SequenceFlow98"
				},
				"899cc076-9905-4f4b-83f0-e67f664bb441": {
					"name": "SequenceFlow99"
				},
				"315c04f9-4e62-4a52-b779-2be58231bb5e": {
					"name": "SequenceFlow100"
				},
				"94875d99-46fe-4807-8b09-286156cbb47c": {
					"name": "SequenceFlow101"
				},
				"876cb3b0-cd43-4962-8f6a-42cdc86fcaa5": {
					"name": "SequenceFlow110"
				},
				"e9eaea3a-e2c1-4a0d-84ee-bee0e3c64736": {
					"name": "SequenceFlow111"
				},
				"7cc05049-5add-4447-b455-2dc4c2379587": {
					"name": "SequenceFlow112"
				},
				"49451b9b-ca8c-4d0a-8a80-3aff44384c1c": {
					"name": "SequenceFlow113"
				},
				"c1044401-e301-419c-b8fa-efe87db7ba16": {
					"name": "SequenceFlow114"
				},
				"64a351bf-68ff-41f9-a387-684b642b34e8": {
					"name": "SequenceFlow115"
				},
				"8e1e2a08-fc5a-4408-8416-c755e953644f": {
					"name": "SequenceFlow116"
				},
				"234b0f27-f579-4ace-9e89-bf4740e1c1c2": {
					"name": "SequenceFlow120"
				},
				"c9e9325e-5364-4693-bea9-e49fb65ef5fc": {
					"name": "SequenceFlow122"
				},
				"95c46d7e-05de-44e6-a0d2-46cb655a9b40": {
					"name": "SequenceFlow123"
				},
				"a1ac20f2-3c31-4141-ab17-be3e6e7dc6e0": {
					"name": "SequenceFlow124"
				},
				"e3862dea-1bdd-4613-9f6a-1d49d27138fe": {
					"name": "SequenceFlow125"
				}
			},
			"diagrams": {
				"42fa7a2d-c526-4a02-b3ba-49b5168ba644": {}
			}
		},
		"11a9b5ee-17c0-4159-9bbf-454dcfdcd5c3": {
			"classDefinition": "com.sap.bpm.wfs.StartEvent",
			"id": "startevent1",
			"name": "StartEvent1"
		},
		"2798f4e7-bc42-4fad-a248-159095a2f40a": {
			"classDefinition": "com.sap.bpm.wfs.EndEvent",
			"id": "endevent1",
			"name": "EndEvent1"
		},
		"3a1ad685-00b4-4e74-a709-d871bbb6e4df": {
			"classDefinition": "com.sap.bpm.wfs.EndEvent",
			"id": "endevent2",
			"name": "EndEvent2"
		},
		"afb40722-a2cb-46a0-ac76-9725d6d3ccd7": {
			"classDefinition": "com.sap.bpm.wfs.ParallelGateway",
			"id": "parallelgateway1",
			"name": "EnterLevel1"
		},
		"6dd1a6e9-2039-4a17-985a-928324df9a57": {
			"classDefinition": "com.sap.bpm.wfs.ParallelGateway",
			"id": "parallelgateway2",
			"name": "ExitLevel1"
		},
		"b6adeb7e-5b5f-4358-8367-6d5195b0871a": {
			"classDefinition": "com.sap.bpm.wfs.ExclusiveGateway",
			"id": "exclusivegateway1",
			"name": "CheckExist_1",
			"default": "42ad242d-747d-406d-94f7-ff29e2567ae0"
		},
		"c25778cd-e88e-4cde-8318-716f13182a84": {
			"classDefinition": "com.sap.bpm.wfs.ExclusiveGateway",
			"id": "exclusivegateway2",
			"name": "EndCheck_1"
		},
		"f8701e64-29c8-4316-93ee-d61413b29c37": {
			"classDefinition": "com.sap.bpm.wfs.UserTask",
			"subject": "${context.approver_1.subject}",
			"priority": "MEDIUM",
			"isHiddenInLogForParticipant": false,
			"supportsForward": false,
			"userInterface": "sapui5://comsapbpmworkflow.comsapbpmwusformplayer/com.sap.bpm.wus.form.player",
			"recipientUsers": "${context.approver_1.user}",
			"formReference": "/forms/FlexibleWFParallel/testApprove.form",
			"userInterfaceParams": [{
				"key": "formId",
				"value": "testapprove"
			}, {
				"key": "formRevision",
				"value": "draft"
			}],
			"customAttributes": [{
				"id": "hana_id",
				"label": "Hana ID",
				"type": "string",
				"value": "${context.hana_id}"
			}, {
				"id": "number",
				"label": "Numero",
				"type": "string",
				"value": "1"
			}, {
				"id": "level",
				"label": "Livello",
				"type": "string",
				"value": "${context.currentLevel}"
			}],
			"id": "usertask1",
			"name": "Approvatore_1"
		},
		"53d2c78c-6340-4f3d-abcf-d98a8cbf1114": {
			"classDefinition": "com.sap.bpm.wfs.ExclusiveGateway",
			"id": "exclusivegateway3",
			"name": "CheckExist_2",
			"default": "9346d3ba-8111-4e3b-8b36-fe5aa0992460"
		},
		"95616ca5-42da-483e-be29-9e4cb82da96a": {
			"classDefinition": "com.sap.bpm.wfs.ExclusiveGateway",
			"id": "exclusivegateway4",
			"name": "EndCheck_2"
		},
		"7cd9b3e0-8463-4159-89b3-f15c47a88dae": {
			"classDefinition": "com.sap.bpm.wfs.ExclusiveGateway",
			"id": "exclusivegateway5",
			"name": "CheckExist_3",
			"default": "45eb27dd-5651-44be-bb55-59564e00112b"
		},
		"c78185af-1024-4827-ab0c-451ea03b6f95": {
			"classDefinition": "com.sap.bpm.wfs.ExclusiveGateway",
			"id": "exclusivegateway6",
			"name": "EndCheck_3"
		},
		"02bcabea-8d91-4876-8671-cf8d7ad31459": {
			"classDefinition": "com.sap.bpm.wfs.UserTask",
			"subject": "${context.approver_2.subject}",
			"priority": "MEDIUM",
			"isHiddenInLogForParticipant": false,
			"supportsForward": false,
			"userInterface": "sapui5://comsapbpmworkflow.comsapbpmwusformplayer/com.sap.bpm.wus.form.player",
			"recipientUsers": "${context.approver_2.user}",
			"formReference": "/forms/FlexibleWFParallel/testApprove.form",
			"userInterfaceParams": [{
				"key": "formId",
				"value": "testapprove"
			}, {
				"key": "formRevision",
				"value": "draft"
			}],
			"customAttributes": [{
				"id": "hana_id",
				"label": "Hana ID",
				"type": "string",
				"value": "${context.hana_id}"
			}, {
				"id": "number",
				"label": "Numero",
				"type": "string",
				"value": "2"
			}, {
				"id": "level",
				"label": "Livello",
				"type": "string",
				"value": "${context.currentLevel}"
			}],
			"id": "usertask2",
			"name": "Approvatore_2"
		},
		"cbc61ef0-28d4-4b92-a4c6-09653d08e65a": {
			"classDefinition": "com.sap.bpm.wfs.UserTask",
			"subject": "${context.approver_3.subject}",
			"priority": "MEDIUM",
			"isHiddenInLogForParticipant": false,
			"supportsForward": false,
			"userInterface": "sapui5://comsapbpmworkflow.comsapbpmwusformplayer/com.sap.bpm.wus.form.player",
			"recipientUsers": "${context.approver_3.user}",
			"formReference": "/forms/FlexibleWFParallel/testApprove.form",
			"userInterfaceParams": [{
				"key": "formId",
				"value": "testapprove"
			}, {
				"key": "formRevision",
				"value": "draft"
			}],
			"customAttributes": [{
				"id": "hana_id",
				"label": "Hana ID",
				"type": "string",
				"value": "${context.hana_id}"
			}, {
				"id": "level",
				"label": "Livello",
				"type": "string",
				"value": "1"
			}, {
				"id": "number",
				"label": "Numero",
				"type": "string",
				"value": "${context.currentLevel}"
			}],
			"id": "usertask3",
			"name": "Approvatore_3"
		},
		"2f3b5be5-bf42-4589-9c88-01bd8ff21794": {
			"classDefinition": "com.sap.bpm.wfs.UserTask",
			"subject": "${context.approver_4.subject}",
			"priority": "MEDIUM",
			"isHiddenInLogForParticipant": false,
			"supportsForward": false,
			"userInterface": "sapui5://comsapbpmworkflow.comsapbpmwusformplayer/com.sap.bpm.wus.form.player",
			"recipientUsers": "${context.approver_4.user}",
			"formReference": "/forms/FlexibleWFParallel/testApprove.form",
			"userInterfaceParams": [{
				"key": "formId",
				"value": "testapprove"
			}, {
				"key": "formRevision",
				"value": "draft"
			}],
			"customAttributes": [{
				"id": "hana_id",
				"label": "Hana ID",
				"type": "string",
				"value": "${context.hana_id}"
			}, {
				"id": "number",
				"label": "Numero",
				"type": "string",
				"value": "4"
			}, {
				"id": "level",
				"label": "Livello",
				"type": "string",
				"value": "${context.currentLevel}"
			}],
			"id": "usertask4",
			"name": "Approvatore_4"
		},
		"b8a30d1a-104e-466d-99d5-cb8d4a119aca": {
			"classDefinition": "com.sap.bpm.wfs.UserTask",
			"subject": "${context.approver_5.subject}",
			"priority": "MEDIUM",
			"isHiddenInLogForParticipant": false,
			"supportsForward": false,
			"userInterface": "sapui5://comsapbpmworkflow.comsapbpmwusformplayer/com.sap.bpm.wus.form.player",
			"recipientUsers": "${context.approver_5.user}",
			"formReference": "/forms/FlexibleWFParallel/testApprove.form",
			"userInterfaceParams": [{
				"key": "formId",
				"value": "testapprove"
			}, {
				"key": "formRevision",
				"value": "draft"
			}],
			"customAttributes": [{
				"id": "hana_id",
				"label": "Hana ID",
				"type": "string",
				"value": "${context.hana_id}"
			}, {
				"id": "number",
				"label": "Numero",
				"type": "string",
				"value": "5"
			}, {
				"id": "level",
				"label": "Livello",
				"type": "string",
				"value": "${context.currentLevel}"
			}],
			"id": "usertask5",
			"name": "Approvatore_5"
		},
		"488cf143-911f-4906-a1e1-2ecb89f4b30a": {
			"classDefinition": "com.sap.bpm.wfs.UserTask",
			"subject": "${context.approver_6.subject}",
			"priority": "MEDIUM",
			"isHiddenInLogForParticipant": false,
			"supportsForward": false,
			"userInterface": "sapui5://comsapbpmworkflow.comsapbpmwusformplayer/com.sap.bpm.wus.form.player",
			"recipientUsers": "${context.approver_6.user}",
			"formReference": "/forms/FlexibleWFParallel/testApprove.form",
			"userInterfaceParams": [{
				"key": "formId",
				"value": "testapprove"
			}, {
				"key": "formRevision",
				"value": "draft"
			}],
			"customAttributes": [{
				"id": "hana_id",
				"label": "Hana ID",
				"type": "string",
				"value": "${context.hana_id}"
			}, {
				"id": "number",
				"label": "Numero",
				"type": "string",
				"value": "6"
			}, {
				"id": "level",
				"label": "Livello",
				"type": "string",
				"value": "${context.currentLevel}"
			}],
			"id": "usertask6",
			"name": "Approvatore_6"
		},
		"f21ae3c9-9dd3-4ded-a8ed-49f4fdb48610": {
			"classDefinition": "com.sap.bpm.wfs.UserTask",
			"subject": "${context.approver_7.subject}",
			"priority": "MEDIUM",
			"isHiddenInLogForParticipant": false,
			"supportsForward": false,
			"userInterface": "sapui5://comsapbpmworkflow.comsapbpmwusformplayer/com.sap.bpm.wus.form.player",
			"recipientUsers": "${context.approver_7.user}",
			"formReference": "/forms/FlexibleWFParallel/testApprove.form",
			"userInterfaceParams": [{
				"key": "formId",
				"value": "testapprove"
			}, {
				"key": "formRevision",
				"value": "draft"
			}],
			"customAttributes": [{
				"id": "hana_id",
				"label": "Hana ID",
				"type": "string",
				"value": "${context.hana_id}"
			}, {
				"id": "number",
				"label": "Numero",
				"type": "string",
				"value": "7"
			}, {
				"id": "level",
				"label": "Livello",
				"type": "string",
				"value": "${context.currentLevel}"
			}],
			"id": "usertask7",
			"name": "Approvatore_7"
		},
		"e21aa586-1a46-49d0-bf1a-b871059179c8": {
			"classDefinition": "com.sap.bpm.wfs.UserTask",
			"subject": "${context.approver_8.subject}",
			"priority": "MEDIUM",
			"isHiddenInLogForParticipant": false,
			"supportsForward": false,
			"userInterface": "sapui5://comsapbpmworkflow.comsapbpmwusformplayer/com.sap.bpm.wus.form.player",
			"recipientUsers": "${context.approver_8.user}",
			"formReference": "/forms/FlexibleWFParallel/testApprove.form",
			"userInterfaceParams": [{
				"key": "formId",
				"value": "testapprove"
			}, {
				"key": "formRevision",
				"value": "draft"
			}],
			"customAttributes": [{
				"id": "hana_id",
				"label": "Hana ID",
				"type": "string",
				"value": "${context.hana_id}"
			}, {
				"id": "number",
				"label": "Numero",
				"type": "string",
				"value": "8"
			}, {
				"id": "level",
				"label": "Livello",
				"type": "string",
				"value": "${context.currentLevel}"
			}],
			"id": "usertask8",
			"name": "Approvatore_8"
		},
		"dee8c3dd-d603-4638-a772-8419e3e674ad": {
			"classDefinition": "com.sap.bpm.wfs.ExclusiveGateway",
			"id": "exclusivegateway7",
			"name": "CheckExist_4",
			"default": "4b043c97-5cb1-4d06-842f-c2f1f52ab28c"
		},
		"7882d0ea-3e20-4495-80cd-1e4b047a623a": {
			"classDefinition": "com.sap.bpm.wfs.ExclusiveGateway",
			"id": "exclusivegateway8",
			"name": "EndCheck_4"
		},
		"058f391d-36ff-449a-acf7-33c67f9df26f": {
			"classDefinition": "com.sap.bpm.wfs.ExclusiveGateway",
			"id": "exclusivegateway9",
			"name": "CheckExist_5",
			"default": "54ae69ff-41c4-4bde-93a0-394327249077"
		},
		"5292c005-e98f-4d1a-b843-757e6a896ca5": {
			"classDefinition": "com.sap.bpm.wfs.ExclusiveGateway",
			"id": "exclusivegateway10",
			"name": "EndCheck_5"
		},
		"1c468989-885e-40a6-86f8-2424867063af": {
			"classDefinition": "com.sap.bpm.wfs.ExclusiveGateway",
			"id": "exclusivegateway11",
			"name": "CheckExist_6",
			"default": "c923719a-7bc3-4bba-bfe9-90e06d7d2386"
		},
		"7e5f2dd5-90fa-4125-80ba-bd611647bc3f": {
			"classDefinition": "com.sap.bpm.wfs.ExclusiveGateway",
			"id": "exclusivegateway12",
			"name": "EndCheck_6"
		},
		"d7b3e6e6-1e2e-4118-b297-2ccb22582a70": {
			"classDefinition": "com.sap.bpm.wfs.ExclusiveGateway",
			"id": "exclusivegateway13",
			"name": "CheckExist_7",
			"default": "72ea2028-b339-469c-bf19-3efa52908865"
		},
		"b49db90c-d9a6-4b01-b3e9-f68df3545fa6": {
			"classDefinition": "com.sap.bpm.wfs.ExclusiveGateway",
			"id": "exclusivegateway14",
			"name": "EndCheck_7"
		},
		"5af2cc0a-d6f2-4323-9b20-53f92c8e1c4d": {
			"classDefinition": "com.sap.bpm.wfs.ExclusiveGateway",
			"id": "exclusivegateway15",
			"name": "CheckExist_8",
			"default": "5dd1a722-36f3-45a3-b0aa-6178251ab7ba"
		},
		"1adfd1e2-4072-4a99-b6c0-944d516f1835": {
			"classDefinition": "com.sap.bpm.wfs.ExclusiveGateway",
			"id": "exclusivegateway16",
			"name": "EndCheck_8"
		},
		"8e3e3683-8559-4672-bff6-255bd3c88b8e": {
			"classDefinition": "com.sap.bpm.wfs.ExclusiveGateway",
			"id": "exclusivegateway17",
			"name": "CheckLevelEmpty",
			"default": "f26aa50a-7aff-4cf7-977a-86dc670e72cd"
		},
		"cf01cf43-9c57-45c4-a7d8-26978f858471": {
			"classDefinition": "com.sap.bpm.wfs.ExclusiveGateway",
			"id": "exclusivegateway18",
			"name": "EndCheckLevelEmpty"
		},
		"cdeb5c9f-4521-41ee-9890-064ee3bca80f": {
			"classDefinition": "com.sap.bpm.wfs.ScriptTask",
			"reference": "/scripts/FlexibleWFParallel/checkLevelApproval.js",
			"id": "scripttask2",
			"name": "ScriptTask2"
		},
		"d2d88835-8b62-49b6-9b72-ffbef218e692": {
			"classDefinition": "com.sap.bpm.wfs.ParallelGateway",
			"id": "parallelgateway6",
			"name": "ParallelGateway6"
		},
		"4f5737ad-7646-4347-8e41-4a03895d8e42": {
			"classDefinition": "com.sap.bpm.wfs.ParallelGateway",
			"id": "parallelgateway14",
			"name": "ParallelGateway14"
		},
		"5fa83431-3f32-49ed-8443-fc5308b9275f": {
			"classDefinition": "com.sap.bpm.wfs.ParallelGateway",
			"id": "parallelgateway15",
			"name": "ParallelGateway15"
		},
		"c0b425b8-75b6-42cb-b79c-a0dc3beb0fa4": {
			"classDefinition": "com.sap.bpm.wfs.ParallelGateway",
			"id": "parallelgateway16",
			"name": "ParallelGateway16"
		},
		"87745008-4217-4157-aae3-e39c5243da05": {
			"classDefinition": "com.sap.bpm.wfs.ParallelGateway",
			"id": "parallelgateway17",
			"name": "ParallelGateway17"
		},
		"ac22a0d2-4936-4441-8ef5-ce98b9949c24": {
			"classDefinition": "com.sap.bpm.wfs.ParallelGateway",
			"id": "parallelgateway18",
			"name": "ParallelGateway18"
		},
		"bd7c7a68-29c0-483f-9067-52c142105c6c": {
			"classDefinition": "com.sap.bpm.wfs.ParallelGateway",
			"id": "parallelgateway19",
			"name": "ParallelGateway19"
		},
		"96824a9e-1300-4901-9d5e-06dc260131d6": {
			"classDefinition": "com.sap.bpm.wfs.ParallelGateway",
			"id": "parallelgateway20",
			"name": "ParallelGateway20"
		},
		"a86fc885-fe92-4b5e-a79d-aab76291a99c": {
			"classDefinition": "com.sap.bpm.wfs.ServiceTask",
			"destination": "kupit-flexiblewf-cap-srv_oauth",
			"destinationSource": "consumer",
			"path": "/catalog/sendMail(hanaId=${context.hana_id},level=${context.currentLevel})",
			"httpMethod": "GET",
			"responseVariable": "${context.emailResult}",
			"id": "servicetask12",
			"name": "SendAllEmails",
			"principalPropagationRef": "11a9b5ee-17c0-4159-9bbf-454dcfdcd5c3"
		},
		"e6119cd1-7adb-4461-80df-cc2990d6c532": {
			"classDefinition": "com.sap.bpm.wfs.ServiceTask",
			"destination": "kupit-flexiblewf-cap-srv_oauth",
			"destinationSource": "consumer",
			"path": "/catalog/sendTeams(hanaId=${context.hana_id},level=${context.currentLevel})",
			"httpMethod": "GET",
			"responseVariable": "${context.teamsResult}",
			"id": "servicetask13",
			"name": "SendAllTeams",
			"principalPropagationRef": "11a9b5ee-17c0-4159-9bbf-454dcfdcd5c3"
		},
		"2c3c2ec0-ae4b-48e0-b816-e10c5e97c0d9": {
			"classDefinition": "com.sap.bpm.wfs.ServiceTask",
			"destination": "kupit-flexiblewf-cap-srv_oauth",
			"destinationSource": "consumer",
			"path": "/catalog/setTaskPending(hanaId=${context.hana_id},level=${context.currentLevel})",
			"httpMethod": "GET",
			"responseVariable": "${context.pendingSetResult}",
			"id": "servicetask14",
			"name": "SetAllTaskPending",
			"principalPropagationRef": "11a9b5ee-17c0-4159-9bbf-454dcfdcd5c3"
		},
		"c6b99f32-5fe6-4ab6-b60a-80fba1b9ae0f": {
			"classDefinition": "com.sap.bpm.wfs.SequenceFlow",
			"id": "sequenceflow1",
			"name": "SequenceFlow1",
			"sourceRef": "11a9b5ee-17c0-4159-9bbf-454dcfdcd5c3",
			"targetRef": "8e3e3683-8559-4672-bff6-255bd3c88b8e"
		},
		"c91a3742-861b-4bfa-a705-523e8e0cd71f": {
			"classDefinition": "com.sap.bpm.wfs.SequenceFlow",
			"id": "sequenceflow2",
			"name": "SequenceFlow2",
			"sourceRef": "afb40722-a2cb-46a0-ac76-9725d6d3ccd7",
			"targetRef": "b6adeb7e-5b5f-4358-8367-6d5195b0871a"
		},
		"497cedb6-87b5-4223-8b56-1ff5000ebd06": {
			"classDefinition": "com.sap.bpm.wfs.SequenceFlow",
			"id": "sequenceflow4",
			"name": "SequenceFlow4",
			"sourceRef": "6dd1a6e9-2039-4a17-985a-928324df9a57",
			"targetRef": "cf01cf43-9c57-45c4-a7d8-26978f858471"
		},
		"658d2874-2c30-44f1-928f-a08049303273": {
			"classDefinition": "com.sap.bpm.wfs.SequenceFlow",
			"condition": "${context.approver_1 != null}",
			"id": "sequenceflow5",
			"name": "ApprAction_1",
			"sourceRef": "b6adeb7e-5b5f-4358-8367-6d5195b0871a",
			"targetRef": "d2d88835-8b62-49b6-9b72-ffbef218e692"
		},
		"aa9035e5-18ad-448f-8f81-b09a968fd567": {
			"classDefinition": "com.sap.bpm.wfs.SequenceFlow",
			"id": "sequenceflow6",
			"name": "SequenceFlow6",
			"sourceRef": "c25778cd-e88e-4cde-8318-716f13182a84",
			"targetRef": "6dd1a6e9-2039-4a17-985a-928324df9a57"
		},
		"26543276-a737-44f9-a141-bab1698ffead": {
			"classDefinition": "com.sap.bpm.wfs.SequenceFlow",
			"id": "sequenceflow7",
			"name": "SequenceFlow7",
			"sourceRef": "f8701e64-29c8-4316-93ee-d61413b29c37",
			"targetRef": "c25778cd-e88e-4cde-8318-716f13182a84"
		},
		"42ad242d-747d-406d-94f7-ff29e2567ae0": {
			"classDefinition": "com.sap.bpm.wfs.SequenceFlow",
			"id": "sequenceflow8",
			"name": "ApprSkip_1",
			"sourceRef": "b6adeb7e-5b5f-4358-8367-6d5195b0871a",
			"targetRef": "c25778cd-e88e-4cde-8318-716f13182a84"
		},
		"1c8dc214-597b-4c74-b699-89d90684fe33": {
			"classDefinition": "com.sap.bpm.wfs.SequenceFlow",
			"condition": "${context.approver_2 != null}",
			"id": "sequenceflow11",
			"name": "SequenceFlow11",
			"sourceRef": "53d2c78c-6340-4f3d-abcf-d98a8cbf1114",
			"targetRef": "96824a9e-1300-4901-9d5e-06dc260131d6"
		},
		"54f7c08d-041a-4af1-a4cd-4b4c315dfc35": {
			"classDefinition": "com.sap.bpm.wfs.SequenceFlow",
			"condition": "${context.approver_3 != null}",
			"id": "sequenceflow12",
			"name": "SequenceFlow12",
			"sourceRef": "7cd9b3e0-8463-4159-89b3-f15c47a88dae",
			"targetRef": "bd7c7a68-29c0-483f-9067-52c142105c6c"
		},
		"ae5a25c2-a409-47bf-9607-77f7524bb2ea": {
			"classDefinition": "com.sap.bpm.wfs.SequenceFlow",
			"id": "sequenceflow13",
			"name": "SequenceFlow13",
			"sourceRef": "02bcabea-8d91-4876-8671-cf8d7ad31459",
			"targetRef": "95616ca5-42da-483e-be29-9e4cb82da96a"
		},
		"5dcf7254-6517-4db7-8ab5-45302233742f": {
			"classDefinition": "com.sap.bpm.wfs.SequenceFlow",
			"id": "sequenceflow14",
			"name": "SequenceFlow14",
			"sourceRef": "cbc61ef0-28d4-4b92-a4c6-09653d08e65a",
			"targetRef": "c78185af-1024-4827-ab0c-451ea03b6f95"
		},
		"9346d3ba-8111-4e3b-8b36-fe5aa0992460": {
			"classDefinition": "com.sap.bpm.wfs.SequenceFlow",
			"id": "sequenceflow15",
			"name": "ApprSkip_2",
			"sourceRef": "53d2c78c-6340-4f3d-abcf-d98a8cbf1114",
			"targetRef": "95616ca5-42da-483e-be29-9e4cb82da96a"
		},
		"45eb27dd-5651-44be-bb55-59564e00112b": {
			"classDefinition": "com.sap.bpm.wfs.SequenceFlow",
			"id": "sequenceflow16",
			"name": "ApprSkip_3",
			"sourceRef": "7cd9b3e0-8463-4159-89b3-f15c47a88dae",
			"targetRef": "c78185af-1024-4827-ab0c-451ea03b6f95"
		},
		"aa80369e-7de4-44ff-bd5d-a3bbcdf46de7": {
			"classDefinition": "com.sap.bpm.wfs.SequenceFlow",
			"id": "sequenceflow17",
			"name": "SequenceFlow17",
			"sourceRef": "95616ca5-42da-483e-be29-9e4cb82da96a",
			"targetRef": "6dd1a6e9-2039-4a17-985a-928324df9a57"
		},
		"3abe3449-52f4-4e98-9018-644841f7df15": {
			"classDefinition": "com.sap.bpm.wfs.SequenceFlow",
			"id": "sequenceflow18",
			"name": "SequenceFlow18",
			"sourceRef": "c78185af-1024-4827-ab0c-451ea03b6f95",
			"targetRef": "6dd1a6e9-2039-4a17-985a-928324df9a57"
		},
		"b13147e8-0f96-4e3b-b863-c7c2adbb3e7d": {
			"classDefinition": "com.sap.bpm.wfs.SequenceFlow",
			"condition": "${context.approver_4 != null}",
			"id": "sequenceflow24",
			"name": "SequenceFlow24",
			"sourceRef": "dee8c3dd-d603-4638-a772-8419e3e674ad",
			"targetRef": "ac22a0d2-4936-4441-8ef5-ce98b9949c24"
		},
		"e9219f80-c646-483f-9b3e-889fc279392c": {
			"classDefinition": "com.sap.bpm.wfs.SequenceFlow",
			"condition": "${context.approver_5 != null}",
			"id": "sequenceflow25",
			"name": "SequenceFlow25",
			"sourceRef": "058f391d-36ff-449a-acf7-33c67f9df26f",
			"targetRef": "87745008-4217-4157-aae3-e39c5243da05"
		},
		"8a26702e-39f2-40ab-9f42-126e44b2bff5": {
			"classDefinition": "com.sap.bpm.wfs.SequenceFlow",
			"condition": "${context.approver_6 != null}",
			"id": "sequenceflow26",
			"name": "SequenceFlow26",
			"sourceRef": "1c468989-885e-40a6-86f8-2424867063af",
			"targetRef": "c0b425b8-75b6-42cb-b79c-a0dc3beb0fa4"
		},
		"b42b2ec8-8bee-45e3-89ff-d2e0bdeb21c1": {
			"classDefinition": "com.sap.bpm.wfs.SequenceFlow",
			"condition": "${context.approver_7 != null}",
			"id": "sequenceflow27",
			"name": "SequenceFlow27",
			"sourceRef": "d7b3e6e6-1e2e-4118-b297-2ccb22582a70",
			"targetRef": "5fa83431-3f32-49ed-8443-fc5308b9275f"
		},
		"008fa70c-9cb3-474d-9411-15960ccc30d3": {
			"classDefinition": "com.sap.bpm.wfs.SequenceFlow",
			"condition": "${context.approver_8 != null}",
			"id": "sequenceflow28",
			"name": "SequenceFlow28",
			"sourceRef": "5af2cc0a-d6f2-4323-9b20-53f92c8e1c4d",
			"targetRef": "4f5737ad-7646-4347-8e41-4a03895d8e42"
		},
		"b8121ac3-efb3-4cf7-a6bc-625c3d29f899": {
			"classDefinition": "com.sap.bpm.wfs.SequenceFlow",
			"id": "sequenceflow29",
			"name": "SequenceFlow29",
			"sourceRef": "2f3b5be5-bf42-4589-9c88-01bd8ff21794",
			"targetRef": "7882d0ea-3e20-4495-80cd-1e4b047a623a"
		},
		"6b0c9026-853f-4e9d-a260-a9a52b956bef": {
			"classDefinition": "com.sap.bpm.wfs.SequenceFlow",
			"id": "sequenceflow30",
			"name": "SequenceFlow30",
			"sourceRef": "b8a30d1a-104e-466d-99d5-cb8d4a119aca",
			"targetRef": "5292c005-e98f-4d1a-b843-757e6a896ca5"
		},
		"61836292-3ef0-4388-9b78-c927a2e3afc8": {
			"classDefinition": "com.sap.bpm.wfs.SequenceFlow",
			"id": "sequenceflow31",
			"name": "SequenceFlow31",
			"sourceRef": "488cf143-911f-4906-a1e1-2ecb89f4b30a",
			"targetRef": "7e5f2dd5-90fa-4125-80ba-bd611647bc3f"
		},
		"52a3b1c6-23b1-436a-a87c-fcca5f5df7ce": {
			"classDefinition": "com.sap.bpm.wfs.SequenceFlow",
			"id": "sequenceflow32",
			"name": "SequenceFlow32",
			"sourceRef": "f21ae3c9-9dd3-4ded-a8ed-49f4fdb48610",
			"targetRef": "b49db90c-d9a6-4b01-b3e9-f68df3545fa6"
		},
		"6aec8ddb-711f-4139-940f-962edcdf504e": {
			"classDefinition": "com.sap.bpm.wfs.SequenceFlow",
			"id": "sequenceflow33",
			"name": "SequenceFlow33",
			"sourceRef": "e21aa586-1a46-49d0-bf1a-b871059179c8",
			"targetRef": "1adfd1e2-4072-4a99-b6c0-944d516f1835"
		},
		"4b043c97-5cb1-4d06-842f-c2f1f52ab28c": {
			"classDefinition": "com.sap.bpm.wfs.SequenceFlow",
			"id": "sequenceflow34",
			"name": "ApprSkip_4",
			"sourceRef": "dee8c3dd-d603-4638-a772-8419e3e674ad",
			"targetRef": "7882d0ea-3e20-4495-80cd-1e4b047a623a"
		},
		"54ae69ff-41c4-4bde-93a0-394327249077": {
			"classDefinition": "com.sap.bpm.wfs.SequenceFlow",
			"id": "sequenceflow35",
			"name": "ApprSkip_5",
			"sourceRef": "058f391d-36ff-449a-acf7-33c67f9df26f",
			"targetRef": "5292c005-e98f-4d1a-b843-757e6a896ca5"
		},
		"c923719a-7bc3-4bba-bfe9-90e06d7d2386": {
			"classDefinition": "com.sap.bpm.wfs.SequenceFlow",
			"id": "sequenceflow36",
			"name": "ApprSkip_6",
			"sourceRef": "1c468989-885e-40a6-86f8-2424867063af",
			"targetRef": "7e5f2dd5-90fa-4125-80ba-bd611647bc3f"
		},
		"72ea2028-b339-469c-bf19-3efa52908865": {
			"classDefinition": "com.sap.bpm.wfs.SequenceFlow",
			"id": "sequenceflow37",
			"name": "ApprSkip_7",
			"sourceRef": "d7b3e6e6-1e2e-4118-b297-2ccb22582a70",
			"targetRef": "b49db90c-d9a6-4b01-b3e9-f68df3545fa6"
		},
		"5dd1a722-36f3-45a3-b0aa-6178251ab7ba": {
			"classDefinition": "com.sap.bpm.wfs.SequenceFlow",
			"id": "sequenceflow38",
			"name": "ApprSkip_8",
			"sourceRef": "5af2cc0a-d6f2-4323-9b20-53f92c8e1c4d",
			"targetRef": "1adfd1e2-4072-4a99-b6c0-944d516f1835"
		},
		"579eaa5d-209f-45b6-98aa-e1aadea45206": {
			"classDefinition": "com.sap.bpm.wfs.SequenceFlow",
			"id": "sequenceflow39",
			"name": "SequenceFlow39",
			"sourceRef": "7882d0ea-3e20-4495-80cd-1e4b047a623a",
			"targetRef": "6dd1a6e9-2039-4a17-985a-928324df9a57"
		},
		"e7f0a68a-75aa-453a-b90e-9f303de631a5": {
			"classDefinition": "com.sap.bpm.wfs.SequenceFlow",
			"id": "sequenceflow40",
			"name": "SequenceFlow40",
			"sourceRef": "5292c005-e98f-4d1a-b843-757e6a896ca5",
			"targetRef": "6dd1a6e9-2039-4a17-985a-928324df9a57"
		},
		"85d973e0-932f-4319-857d-aee77a9a12f7": {
			"classDefinition": "com.sap.bpm.wfs.SequenceFlow",
			"id": "sequenceflow41",
			"name": "SequenceFlow41",
			"sourceRef": "7e5f2dd5-90fa-4125-80ba-bd611647bc3f",
			"targetRef": "6dd1a6e9-2039-4a17-985a-928324df9a57"
		},
		"f4cc5e80-05d4-4e83-8643-d00e5878e7ff": {
			"classDefinition": "com.sap.bpm.wfs.SequenceFlow",
			"id": "sequenceflow42",
			"name": "SequenceFlow42",
			"sourceRef": "b49db90c-d9a6-4b01-b3e9-f68df3545fa6",
			"targetRef": "6dd1a6e9-2039-4a17-985a-928324df9a57"
		},
		"f0162dd0-c3dc-47cc-b30a-2ac005d9f1a6": {
			"classDefinition": "com.sap.bpm.wfs.SequenceFlow",
			"id": "sequenceflow43",
			"name": "SequenceFlow43",
			"sourceRef": "1adfd1e2-4072-4a99-b6c0-944d516f1835",
			"targetRef": "6dd1a6e9-2039-4a17-985a-928324df9a57"
		},
		"f26aa50a-7aff-4cf7-977a-86dc670e72cd": {
			"classDefinition": "com.sap.bpm.wfs.SequenceFlow",
			"id": "sequenceflow44",
			"name": "LevelNotEmpty",
			"sourceRef": "8e3e3683-8559-4672-bff6-255bd3c88b8e",
			"targetRef": "2c3c2ec0-ae4b-48e0-b816-e10c5e97c0d9"
		},
		"8505e222-5e24-41e9-9b19-11a2a7bdf72f": {
			"classDefinition": "com.sap.bpm.wfs.SequenceFlow",
			"id": "sequenceflow45",
			"name": "SequenceFlow45",
			"sourceRef": "cf01cf43-9c57-45c4-a7d8-26978f858471",
			"targetRef": "cdeb5c9f-4521-41ee-9890-064ee3bca80f"
		},
		"3799fafa-38cb-4f57-926e-ac11a9937e4d": {
			"classDefinition": "com.sap.bpm.wfs.SequenceFlow",
			"condition": "${context.approver_1 == null && context.approver_2 == null && context.approver_3 == null && context.approver_4 == null && context.approver_5 == null && context.approver_6 == null && context.approver_7 == null && context.approver_8 == null}",
			"id": "sequenceflow46",
			"name": "LevelIsEmpty",
			"sourceRef": "8e3e3683-8559-4672-bff6-255bd3c88b8e",
			"targetRef": "cf01cf43-9c57-45c4-a7d8-26978f858471"
		},
		"4f2fd127-009e-4c3a-822e-b07e7236c97d": {
			"classDefinition": "com.sap.bpm.wfs.SequenceFlow",
			"id": "sequenceflow51",
			"name": "SequenceFlow51",
			"sourceRef": "cdeb5c9f-4521-41ee-9890-064ee3bca80f",
			"targetRef": "2798f4e7-bc42-4fad-a248-159095a2f40a"
		},
		"5775a767-e4eb-49f7-ae65-0f1cf6292be6": {
			"classDefinition": "com.sap.bpm.wfs.SequenceFlow",
			"id": "sequenceflow53",
			"name": "SequenceFlow53",
			"sourceRef": "d2d88835-8b62-49b6-9b72-ffbef218e692",
			"targetRef": "f8701e64-29c8-4316-93ee-d61413b29c37"
		},
		"a58b8c05-8770-477e-8667-f62ac2b9d77a": {
			"classDefinition": "com.sap.bpm.wfs.SequenceFlow",
			"id": "sequenceflow95",
			"name": "SequenceFlow95",
			"sourceRef": "4f5737ad-7646-4347-8e41-4a03895d8e42",
			"targetRef": "e21aa586-1a46-49d0-bf1a-b871059179c8"
		},
		"091d0eb7-0555-461c-8771-c6f6cf8e3bd6": {
			"classDefinition": "com.sap.bpm.wfs.SequenceFlow",
			"id": "sequenceflow96",
			"name": "SequenceFlow96",
			"sourceRef": "5fa83431-3f32-49ed-8443-fc5308b9275f",
			"targetRef": "f21ae3c9-9dd3-4ded-a8ed-49f4fdb48610"
		},
		"0a8e7262-c324-47e8-9291-9562d2bb57cb": {
			"classDefinition": "com.sap.bpm.wfs.SequenceFlow",
			"id": "sequenceflow97",
			"name": "SequenceFlow97",
			"sourceRef": "c0b425b8-75b6-42cb-b79c-a0dc3beb0fa4",
			"targetRef": "488cf143-911f-4906-a1e1-2ecb89f4b30a"
		},
		"878fd8c8-37a7-42aa-bf4a-c05fb15a90f2": {
			"classDefinition": "com.sap.bpm.wfs.SequenceFlow",
			"id": "sequenceflow98",
			"name": "SequenceFlow98",
			"sourceRef": "87745008-4217-4157-aae3-e39c5243da05",
			"targetRef": "b8a30d1a-104e-466d-99d5-cb8d4a119aca"
		},
		"899cc076-9905-4f4b-83f0-e67f664bb441": {
			"classDefinition": "com.sap.bpm.wfs.SequenceFlow",
			"id": "sequenceflow99",
			"name": "SequenceFlow99",
			"sourceRef": "ac22a0d2-4936-4441-8ef5-ce98b9949c24",
			"targetRef": "2f3b5be5-bf42-4589-9c88-01bd8ff21794"
		},
		"315c04f9-4e62-4a52-b779-2be58231bb5e": {
			"classDefinition": "com.sap.bpm.wfs.SequenceFlow",
			"id": "sequenceflow100",
			"name": "SequenceFlow100",
			"sourceRef": "bd7c7a68-29c0-483f-9067-52c142105c6c",
			"targetRef": "cbc61ef0-28d4-4b92-a4c6-09653d08e65a"
		},
		"94875d99-46fe-4807-8b09-286156cbb47c": {
			"classDefinition": "com.sap.bpm.wfs.SequenceFlow",
			"id": "sequenceflow101",
			"name": "SequenceFlow101",
			"sourceRef": "96824a9e-1300-4901-9d5e-06dc260131d6",
			"targetRef": "02bcabea-8d91-4876-8671-cf8d7ad31459"
		},
		"876cb3b0-cd43-4962-8f6a-42cdc86fcaa5": {
			"classDefinition": "com.sap.bpm.wfs.SequenceFlow",
			"id": "sequenceflow110",
			"name": "SequenceFlow110",
			"sourceRef": "afb40722-a2cb-46a0-ac76-9725d6d3ccd7",
			"targetRef": "53d2c78c-6340-4f3d-abcf-d98a8cbf1114"
		},
		"e9eaea3a-e2c1-4a0d-84ee-bee0e3c64736": {
			"classDefinition": "com.sap.bpm.wfs.SequenceFlow",
			"id": "sequenceflow111",
			"name": "SequenceFlow111",
			"sourceRef": "afb40722-a2cb-46a0-ac76-9725d6d3ccd7",
			"targetRef": "7cd9b3e0-8463-4159-89b3-f15c47a88dae"
		},
		"7cc05049-5add-4447-b455-2dc4c2379587": {
			"classDefinition": "com.sap.bpm.wfs.SequenceFlow",
			"id": "sequenceflow112",
			"name": "SequenceFlow112",
			"sourceRef": "afb40722-a2cb-46a0-ac76-9725d6d3ccd7",
			"targetRef": "dee8c3dd-d603-4638-a772-8419e3e674ad"
		},
		"49451b9b-ca8c-4d0a-8a80-3aff44384c1c": {
			"classDefinition": "com.sap.bpm.wfs.SequenceFlow",
			"id": "sequenceflow113",
			"name": "SequenceFlow113",
			"sourceRef": "afb40722-a2cb-46a0-ac76-9725d6d3ccd7",
			"targetRef": "058f391d-36ff-449a-acf7-33c67f9df26f"
		},
		"c1044401-e301-419c-b8fa-efe87db7ba16": {
			"classDefinition": "com.sap.bpm.wfs.SequenceFlow",
			"id": "sequenceflow114",
			"name": "SequenceFlow114",
			"sourceRef": "afb40722-a2cb-46a0-ac76-9725d6d3ccd7",
			"targetRef": "1c468989-885e-40a6-86f8-2424867063af"
		},
		"64a351bf-68ff-41f9-a387-684b642b34e8": {
			"classDefinition": "com.sap.bpm.wfs.SequenceFlow",
			"id": "sequenceflow115",
			"name": "SequenceFlow115",
			"sourceRef": "afb40722-a2cb-46a0-ac76-9725d6d3ccd7",
			"targetRef": "d7b3e6e6-1e2e-4118-b297-2ccb22582a70"
		},
		"8e1e2a08-fc5a-4408-8416-c755e953644f": {
			"classDefinition": "com.sap.bpm.wfs.SequenceFlow",
			"id": "sequenceflow116",
			"name": "SequenceFlow116",
			"sourceRef": "afb40722-a2cb-46a0-ac76-9725d6d3ccd7",
			"targetRef": "5af2cc0a-d6f2-4323-9b20-53f92c8e1c4d"
		},
		"234b0f27-f579-4ace-9e89-bf4740e1c1c2": {
			"classDefinition": "com.sap.bpm.wfs.SequenceFlow",
			"id": "sequenceflow120",
			"name": "SequenceFlow120",
			"sourceRef": "afb40722-a2cb-46a0-ac76-9725d6d3ccd7",
			"targetRef": "a86fc885-fe92-4b5e-a79d-aab76291a99c"
		},
		"c9e9325e-5364-4693-bea9-e49fb65ef5fc": {
			"classDefinition": "com.sap.bpm.wfs.SequenceFlow",
			"id": "sequenceflow122",
			"name": "SequenceFlow122",
			"sourceRef": "e6119cd1-7adb-4461-80df-cc2990d6c532",
			"targetRef": "3a1ad685-00b4-4e74-a709-d871bbb6e4df"
		},
		"95c46d7e-05de-44e6-a0d2-46cb655a9b40": {
			"classDefinition": "com.sap.bpm.wfs.SequenceFlow",
			"id": "sequenceflow123",
			"name": "SequenceFlow123",
			"sourceRef": "afb40722-a2cb-46a0-ac76-9725d6d3ccd7",
			"targetRef": "e6119cd1-7adb-4461-80df-cc2990d6c532"
		},
		"a1ac20f2-3c31-4141-ab17-be3e6e7dc6e0": {
			"classDefinition": "com.sap.bpm.wfs.SequenceFlow",
			"id": "sequenceflow124",
			"name": "SequenceFlow124",
			"sourceRef": "a86fc885-fe92-4b5e-a79d-aab76291a99c",
			"targetRef": "3a1ad685-00b4-4e74-a709-d871bbb6e4df"
		},
		"e3862dea-1bdd-4613-9f6a-1d49d27138fe": {
			"classDefinition": "com.sap.bpm.wfs.SequenceFlow",
			"id": "sequenceflow125",
			"name": "SequenceFlow125",
			"sourceRef": "2c3c2ec0-ae4b-48e0-b816-e10c5e97c0d9",
			"targetRef": "afb40722-a2cb-46a0-ac76-9725d6d3ccd7"
		},
		"42fa7a2d-c526-4a02-b3ba-49b5168ba644": {
			"classDefinition": "com.sap.bpm.wfs.ui.Diagram",
			"symbols": {
				"df898b52-91e1-4778-baad-2ad9a261d30e": {},
				"53e54950-7757-4161-82c9-afa7e86cff2c": {},
				"6bb141da-d485-4317-93b8-e17711df4c32": {},
				"a0f53102-4092-4401-be9e-c9e058fc627d": {},
				"c99c0d67-8de4-4021-ac1c-ea5057f87d78": {},
				"c8755d70-ca53-4a15-92db-ed130e9afd9d": {},
				"7f4d8baf-517d-4f7e-9d3f-20bbcc04feba": {},
				"7d538763-7042-4ec9-b942-d3336b46cf94": {},
				"8dfc2932-b7fb-40d7-ae77-278d8555f4c3": {},
				"01c4f577-b3a6-4ffc-872c-7716b99811e6": {},
				"69c20b3b-e226-4fb9-8786-44418a56df20": {},
				"a2d644fd-efdd-4af0-8dcd-2fb2813e95fa": {},
				"ad819bde-d7a8-4e24-afab-7cc0f64cb2bd": {},
				"fce41860-1974-400f-9f72-fd2057a603aa": {},
				"7a143ec1-e59e-4170-bd2c-a912e404388c": {},
				"94e55f20-423a-4c83-98a2-46acb3d06ac0": {},
				"a8a38919-ab32-44f8-9efc-bf2c55af76fb": {},
				"7f809aef-2fcc-477f-bc4b-eacd728966bf": {},
				"c00c79fd-e010-40df-886b-ca3c4dff1b46": {},
				"40dea7c1-8a60-45e0-a97b-0e41fe67c1e9": {},
				"ac31b624-7f69-4768-ae04-f38de6f5e96a": {},
				"c785f8a7-6d56-48c9-a07a-d25da08f6b8b": {},
				"079ffda6-73c0-492e-8e5d-7cd112bc23bc": {},
				"3e645766-f1b8-4a7e-92ad-3a79c800878d": {},
				"f06e30ae-7dc9-4bfe-8a0c-ac1ffd220b3e": {},
				"c1d1f0c9-33b0-409c-8c12-e4eea6ed7bb2": {},
				"5524af74-4bd2-4d23-b14a-4dedd0256a83": {},
				"430f15d3-15f1-4a28-82a2-2950c129247f": {},
				"080ff312-bee1-4f11-add7-b38f682fd08f": {},
				"645f27c0-0ef2-4bc4-a135-1566998c9ed9": {},
				"ff074dac-fac9-4887-b709-3a6f1c26a0d4": {},
				"b0a796b8-d733-4c18-8b05-32293dee5597": {},
				"669b0480-1858-454c-b7af-d7b2a462e8aa": {},
				"d16b919c-f8aa-4ec1-bf5e-85503453c7e0": {},
				"d3cca1bf-bd03-4932-9367-dedee92cd914": {},
				"7b155adb-21c8-4764-b63a-b3eba8d69876": {},
				"1d75471c-fb62-4ac5-8129-f0c18e0c60df": {},
				"098bdc89-1ed3-407d-97d8-769e815eb563": {},
				"43812f6c-4276-49cd-8a44-8e33ddc638e9": {},
				"a0e573e2-2c4e-4b4c-b27d-06e9bad8d6e8": {},
				"5ce6341c-5a92-419f-8af5-1eb19f4db21b": {},
				"ab85f4c9-b27f-49d6-933c-8617b141a57d": {},
				"556af571-f4f5-488f-a049-e72cf45ceea3": {},
				"bb56de28-5ce2-459c-a76f-d7e93e811557": {},
				"75b9fd3d-2797-4ec0-a34e-9de66677f55f": {},
				"3ae7a141-d8e1-4737-ab7c-3a418334522d": {},
				"0efec81a-84d8-4679-939e-c5a2c75f3cb5": {},
				"613c6727-ea91-46d6-8b21-251f92cc56b1": {},
				"5f256bd5-18be-4c78-9e82-7fc8cde6f5bf": {},
				"cec48d61-c5b1-4fad-81d9-c2e91d6674bd": {},
				"10fac113-08c7-40a3-b70e-5865da8fe4e9": {},
				"299fe263-edb7-4bdb-991d-6751b009da42": {},
				"03c14124-ce5b-4765-8843-f2e3fc4b1d45": {},
				"fdbccab3-cfee-458b-a29d-8c35dfd307b0": {},
				"ca51b2a2-bff8-4559-848e-8ff1489c327b": {},
				"cb0775b0-71d1-41c9-a22e-83a2bcdfcebf": {},
				"51aab287-e09f-4c66-a104-e7529dcb073c": {},
				"efb127aa-9d29-49f7-9c5b-e262d3bbe1dc": {},
				"2b1921eb-8206-4f50-a46a-cd6cbf31f7f8": {},
				"ea5233a1-d516-4654-b70d-6370d534cfe3": {},
				"8f4abf0d-8dd4-4b22-af13-fd31db26551c": {},
				"df88abde-3ef6-4d58-bd98-e7bbe4c80a6e": {},
				"7fb75b22-e03f-4ef1-b87c-caab950a6f7d": {},
				"eca2cdd0-16b0-4436-b748-4e8d9adb7abe": {},
				"845f601c-e044-4105-81d9-3582f0038488": {},
				"4bd5fa56-8235-4cc8-8e99-16a05bccc4f2": {},
				"0a294c54-eb89-420d-b405-dc6bca2214db": {},
				"63d479d4-bf00-47a6-85e7-d8191958e7c4": {},
				"9d8853de-4696-435c-8c56-c049a899bb22": {},
				"dabf1644-3495-43f2-bed4-7425c17b7a1b": {},
				"77974bea-f341-42b6-ae49-84444f8eba30": {},
				"4e94d975-c0ae-4edf-8166-34694b8b3866": {},
				"e68d98a4-97c4-48dd-8e40-d938b392d5d3": {},
				"8e928e54-effc-471d-82f9-3eaba2671ea9": {},
				"b893ca0b-029e-4f47-95b3-073537087917": {},
				"82f336ef-479a-4b36-add1-d742fda9788d": {},
				"0ddd65c4-5cad-45be-a9f6-ffe4dacbf451": {},
				"6660ba91-9b62-4e5b-9768-555a415b3dfe": {},
				"edd78c37-6d3b-42d7-9399-d34131b7f931": {},
				"c181edf2-dd90-4c53-b4d5-36d4d4a37a89": {},
				"1252ae08-fd9c-4c3f-ae58-a247d2a168b9": {},
				"f33ea063-ca7a-47a3-96d5-f58534ffc84a": {},
				"d9cc8559-5955-4912-bb7d-acbfb9f64216": {},
				"9ff164c7-ce7f-4af7-8228-f23e2c8d45b9": {},
				"f519bccf-7812-47ee-b170-a502d898546e": {},
				"99cc6407-1cef-44f9-8b74-330e1f8c07cc": {},
				"1d2b8eff-578a-4165-a1d4-dc6133ef02f0": {},
				"b7074491-bf50-409f-800b-9e3d172cbe84": {},
				"7434fc41-ba18-4c5e-af5f-791b57d8bd72": {},
				"c7421b40-ef36-4097-b856-bdf4e5601c34": {},
				"27ad88d1-3603-413c-8357-1d618f544aab": {},
				"0b62eef3-9281-43ea-8e73-3e6d2dc9183d": {},
				"e53935d3-6272-4e86-b115-79ce6d6d0bee": {},
				"5cb5d58f-797d-4178-abc6-0a425382c004": {},
				"6f4af97b-d542-4206-9ba2-a13971432e75": {},
				"2e5ba272-9f16-4ae2-9b2c-e5a5c8be8dd5": {},
				"fc60674b-5e0f-429d-b5e4-503855927294": {},
				"66778cef-9ebb-47bb-9da4-6f5edc9dc987": {},
				"77af5875-dbe6-4583-89b7-7088e0a5bd70": {},
				"2f97f417-6af6-4996-aa34-8d7a3892761d": {},
				"f95b65b6-549b-48dd-9be3-11da94d25c37": {},
				"77023329-c380-4941-ad27-bf4b4105b383": {}
			}
		},
		"df898b52-91e1-4778-baad-2ad9a261d30e": {
			"classDefinition": "com.sap.bpm.wfs.ui.StartEventSymbol",
			"x": -34,
			"y": 100,
			"width": 32,
			"height": 32,
			"object": "11a9b5ee-17c0-4159-9bbf-454dcfdcd5c3"
		},
		"53e54950-7757-4161-82c9-afa7e86cff2c": {
			"classDefinition": "com.sap.bpm.wfs.ui.EndEventSymbol",
			"x": 1313,
			"y": 100,
			"width": 35,
			"height": 35,
			"object": "2798f4e7-bc42-4fad-a248-159095a2f40a"
		},
		"6bb141da-d485-4317-93b8-e17711df4c32": {
			"classDefinition": "com.sap.bpm.wfs.ui.SequenceFlowSymbol",
			"points": "-18,116 103,116",
			"sourceSymbol": "df898b52-91e1-4778-baad-2ad9a261d30e",
			"targetSymbol": "eca2cdd0-16b0-4436-b748-4e8d9adb7abe",
			"object": "c6b99f32-5fe6-4ab6-b60a-80fba1b9ae0f"
		},
		"a0f53102-4092-4401-be9e-c9e058fc627d": {
			"classDefinition": "com.sap.bpm.wfs.ui.ParallelGatewaySymbol",
			"x": 152,
			"y": 95,
			"object": "afb40722-a2cb-46a0-ac76-9725d6d3ccd7"
		},
		"c99c0d67-8de4-4021-ac1c-ea5057f87d78": {
			"classDefinition": "com.sap.bpm.wfs.ui.SequenceFlowSymbol",
			"points": "173,116 246,116",
			"sourceSymbol": "a0f53102-4092-4401-be9e-c9e058fc627d",
			"targetSymbol": "7d538763-7042-4ec9-b942-d3336b46cf94",
			"object": "c91a3742-861b-4bfa-a705-523e8e0cd71f"
		},
		"c8755d70-ca53-4a15-92db-ed130e9afd9d": {
			"classDefinition": "com.sap.bpm.wfs.ui.ParallelGatewaySymbol",
			"x": 1044,
			"y": 95,
			"object": "6dd1a6e9-2039-4a17-985a-928324df9a57"
		},
		"7f4d8baf-517d-4f7e-9d3f-20bbcc04feba": {
			"classDefinition": "com.sap.bpm.wfs.ui.SequenceFlowSymbol",
			"points": "1065,116 1140,116",
			"sourceSymbol": "c8755d70-ca53-4a15-92db-ed130e9afd9d",
			"targetSymbol": "4bd5fa56-8235-4cc8-8e99-16a05bccc4f2",
			"object": "497cedb6-87b5-4223-8b56-1ff5000ebd06"
		},
		"7d538763-7042-4ec9-b942-d3336b46cf94": {
			"classDefinition": "com.sap.bpm.wfs.ui.ExclusiveGatewaySymbol",
			"x": 225,
			"y": 95,
			"object": "b6adeb7e-5b5f-4358-8367-6d5195b0871a"
		},
		"8dfc2932-b7fb-40d7-ae77-278d8555f4c3": {
			"classDefinition": "com.sap.bpm.wfs.ui.SequenceFlowSymbol",
			"points": "246,116 315,116",
			"sourceSymbol": "7d538763-7042-4ec9-b942-d3336b46cf94",
			"targetSymbol": "77974bea-f341-42b6-ae49-84444f8eba30",
			"object": "658d2874-2c30-44f1-928f-a08049303273"
		},
		"01c4f577-b3a6-4ffc-872c-7716b99811e6": {
			"classDefinition": "com.sap.bpm.wfs.ui.ExclusiveGatewaySymbol",
			"x": 974,
			"y": 95,
			"object": "c25778cd-e88e-4cde-8318-716f13182a84"
		},
		"69c20b3b-e226-4fb9-8786-44418a56df20": {
			"classDefinition": "com.sap.bpm.wfs.ui.SequenceFlowSymbol",
			"points": "995,116 1065,116",
			"sourceSymbol": "01c4f577-b3a6-4ffc-872c-7716b99811e6",
			"targetSymbol": "c8755d70-ca53-4a15-92db-ed130e9afd9d",
			"object": "aa9035e5-18ad-448f-8f81-b09a968fd567"
		},
		"a2d644fd-efdd-4af0-8dcd-2fb2813e95fa": {
			"classDefinition": "com.sap.bpm.wfs.ui.UserTaskSymbol",
			"x": 544,
			"y": 86,
			"width": 100,
			"height": 60,
			"object": "f8701e64-29c8-4316-93ee-d61413b29c37"
		},
		"ad819bde-d7a8-4e24-afab-7cc0f64cb2bd": {
			"classDefinition": "com.sap.bpm.wfs.ui.SequenceFlowSymbol",
			"points": "594,116 995,116",
			"sourceSymbol": "a2d644fd-efdd-4af0-8dcd-2fb2813e95fa",
			"targetSymbol": "01c4f577-b3a6-4ffc-872c-7716b99811e6",
			"object": "26543276-a737-44f9-a141-bab1698ffead"
		},
		"fce41860-1974-400f-9f72-fd2057a603aa": {
			"classDefinition": "com.sap.bpm.wfs.ui.SequenceFlowSymbol",
			"points": "246,116 246,-15 988,-15 988,108",
			"sourceSymbol": "7d538763-7042-4ec9-b942-d3336b46cf94",
			"targetSymbol": "01c4f577-b3a6-4ffc-872c-7716b99811e6",
			"object": "42ad242d-747d-406d-94f7-ff29e2567ae0"
		},
		"7a143ec1-e59e-4170-bd2c-a912e404388c": {
			"classDefinition": "com.sap.bpm.wfs.ui.ExclusiveGatewaySymbol",
			"x": 225,
			"y": 221,
			"object": "53d2c78c-6340-4f3d-abcf-d98a8cbf1114"
		},
		"94e55f20-423a-4c83-98a2-46acb3d06ac0": {
			"classDefinition": "com.sap.bpm.wfs.ui.ExclusiveGatewaySymbol",
			"x": 716,
			"y": 221,
			"object": "95616ca5-42da-483e-be29-9e4cb82da96a"
		},
		"a8a38919-ab32-44f8-9efc-bf2c55af76fb": {
			"classDefinition": "com.sap.bpm.wfs.ui.ExclusiveGatewaySymbol",
			"x": 225,
			"y": 329,
			"object": "7cd9b3e0-8463-4159-89b3-f15c47a88dae"
		},
		"7f809aef-2fcc-477f-bc4b-eacd728966bf": {
			"classDefinition": "com.sap.bpm.wfs.ui.ExclusiveGatewaySymbol",
			"x": 716,
			"y": 341,
			"object": "c78185af-1024-4827-ab0c-451ea03b6f95"
		},
		"c00c79fd-e010-40df-886b-ca3c4dff1b46": {
			"classDefinition": "com.sap.bpm.wfs.ui.UserTaskSymbol",
			"x": 544,
			"y": 212,
			"width": 100,
			"height": 60,
			"object": "02bcabea-8d91-4876-8671-cf8d7ad31459"
		},
		"40dea7c1-8a60-45e0-a97b-0e41fe67c1e9": {
			"classDefinition": "com.sap.bpm.wfs.ui.UserTaskSymbol",
			"x": 544,
			"y": 332,
			"width": 100,
			"height": 60,
			"object": "cbc61ef0-28d4-4b92-a4c6-09653d08e65a"
		},
		"ac31b624-7f69-4768-ae04-f38de6f5e96a": {
			"classDefinition": "com.sap.bpm.wfs.ui.SequenceFlowSymbol",
			"points": "246,240 402,240",
			"sourceSymbol": "7a143ec1-e59e-4170-bd2c-a912e404388c",
			"targetSymbol": "99cc6407-1cef-44f9-8b74-330e1f8c07cc",
			"object": "1c8dc214-597b-4c74-b699-89d90684fe33"
		},
		"c785f8a7-6d56-48c9-a07a-d25da08f6b8b": {
			"classDefinition": "com.sap.bpm.wfs.ui.SequenceFlowSymbol",
			"points": "246,349.5 402,349.5",
			"sourceSymbol": "a8a38919-ab32-44f8-9efc-bf2c55af76fb",
			"targetSymbol": "9ff164c7-ce7f-4af7-8228-f23e2c8d45b9",
			"object": "54f7c08d-041a-4af1-a4cd-4b4c315dfc35"
		},
		"079ffda6-73c0-492e-8e5d-7cd112bc23bc": {
			"classDefinition": "com.sap.bpm.wfs.ui.SequenceFlowSymbol",
			"points": "594,242 737,242",
			"sourceSymbol": "c00c79fd-e010-40df-886b-ca3c4dff1b46",
			"targetSymbol": "94e55f20-423a-4c83-98a2-46acb3d06ac0",
			"object": "ae5a25c2-a409-47bf-9607-77f7524bb2ea"
		},
		"3e645766-f1b8-4a7e-92ad-3a79c800878d": {
			"classDefinition": "com.sap.bpm.wfs.ui.SequenceFlowSymbol",
			"points": "594,362 737,362",
			"sourceSymbol": "40dea7c1-8a60-45e0-a97b-0e41fe67c1e9",
			"targetSymbol": "7f809aef-2fcc-477f-bc4b-eacd728966bf",
			"object": "5dcf7254-6517-4db7-8ab5-45302233742f"
		},
		"f06e30ae-7dc9-4bfe-8a0c-ac1ffd220b3e": {
			"classDefinition": "com.sap.bpm.wfs.ui.SequenceFlowSymbol",
			"points": "246,242 246,179 741,179 741,232",
			"sourceSymbol": "7a143ec1-e59e-4170-bd2c-a912e404388c",
			"targetSymbol": "94e55f20-423a-4c83-98a2-46acb3d06ac0",
			"object": "9346d3ba-8111-4e3b-8b36-fe5aa0992460"
		},
		"c1d1f0c9-33b0-409c-8c12-e4eea6ed7bb2": {
			"classDefinition": "com.sap.bpm.wfs.ui.SequenceFlowSymbol",
			"points": "246,350.5 246,300 741,300 741,350.5",
			"sourceSymbol": "a8a38919-ab32-44f8-9efc-bf2c55af76fb",
			"targetSymbol": "7f809aef-2fcc-477f-bc4b-eacd728966bf",
			"object": "45eb27dd-5651-44be-bb55-59564e00112b"
		},
		"5524af74-4bd2-4d23-b14a-4dedd0256a83": {
			"classDefinition": "com.sap.bpm.wfs.ui.SequenceFlowSymbol",
			"points": "737,242 901,242 901,116 1066,116",
			"sourceSymbol": "94e55f20-423a-4c83-98a2-46acb3d06ac0",
			"targetSymbol": "c8755d70-ca53-4a15-92db-ed130e9afd9d",
			"object": "aa80369e-7de4-44ff-bd5d-a3bbcdf46de7"
		},
		"430f15d3-15f1-4a28-82a2-2950c129247f": {
			"classDefinition": "com.sap.bpm.wfs.ui.SequenceFlowSymbol",
			"points": "741,361 901,361 901,116 1065,116",
			"sourceSymbol": "7f809aef-2fcc-477f-bc4b-eacd728966bf",
			"targetSymbol": "c8755d70-ca53-4a15-92db-ed130e9afd9d",
			"object": "3abe3449-52f4-4e98-9018-644841f7df15"
		},
		"080ff312-bee1-4f11-add7-b38f682fd08f": {
			"classDefinition": "com.sap.bpm.wfs.ui.UserTaskSymbol",
			"x": 544,
			"y": 459,
			"width": 100,
			"height": 60,
			"object": "2f3b5be5-bf42-4589-9c88-01bd8ff21794"
		},
		"645f27c0-0ef2-4bc4-a135-1566998c9ed9": {
			"classDefinition": "com.sap.bpm.wfs.ui.UserTaskSymbol",
			"x": 544,
			"y": 587,
			"width": 100,
			"height": 60,
			"object": "b8a30d1a-104e-466d-99d5-cb8d4a119aca"
		},
		"ff074dac-fac9-4887-b709-3a6f1c26a0d4": {
			"classDefinition": "com.sap.bpm.wfs.ui.UserTaskSymbol",
			"x": 544,
			"y": 700,
			"width": 100,
			"height": 60,
			"object": "488cf143-911f-4906-a1e1-2ecb89f4b30a"
		},
		"b0a796b8-d733-4c18-8b05-32293dee5597": {
			"classDefinition": "com.sap.bpm.wfs.ui.UserTaskSymbol",
			"x": 544,
			"y": 806,
			"width": 100,
			"height": 60,
			"object": "f21ae3c9-9dd3-4ded-a8ed-49f4fdb48610"
		},
		"669b0480-1858-454c-b7af-d7b2a462e8aa": {
			"classDefinition": "com.sap.bpm.wfs.ui.UserTaskSymbol",
			"x": 544,
			"y": 914,
			"width": 100,
			"height": 60,
			"object": "e21aa586-1a46-49d0-bf1a-b871059179c8"
		},
		"d16b919c-f8aa-4ec1-bf5e-85503453c7e0": {
			"classDefinition": "com.sap.bpm.wfs.ui.ExclusiveGatewaySymbol",
			"x": 225,
			"y": 468,
			"object": "dee8c3dd-d603-4638-a772-8419e3e674ad"
		},
		"d3cca1bf-bd03-4932-9367-dedee92cd914": {
			"classDefinition": "com.sap.bpm.wfs.ui.ExclusiveGatewaySymbol",
			"x": 716,
			"y": 468,
			"object": "7882d0ea-3e20-4495-80cd-1e4b047a623a"
		},
		"7b155adb-21c8-4764-b63a-b3eba8d69876": {
			"classDefinition": "com.sap.bpm.wfs.ui.ExclusiveGatewaySymbol",
			"x": 225,
			"y": 605,
			"object": "058f391d-36ff-449a-acf7-33c67f9df26f"
		},
		"1d75471c-fb62-4ac5-8129-f0c18e0c60df": {
			"classDefinition": "com.sap.bpm.wfs.ui.ExclusiveGatewaySymbol",
			"x": 716,
			"y": 596,
			"object": "5292c005-e98f-4d1a-b843-757e6a896ca5"
		},
		"098bdc89-1ed3-407d-97d8-769e815eb563": {
			"classDefinition": "com.sap.bpm.wfs.ui.ExclusiveGatewaySymbol",
			"x": 225,
			"y": 709,
			"object": "1c468989-885e-40a6-86f8-2424867063af"
		},
		"43812f6c-4276-49cd-8a44-8e33ddc638e9": {
			"classDefinition": "com.sap.bpm.wfs.ui.ExclusiveGatewaySymbol",
			"x": 716,
			"y": 709,
			"object": "7e5f2dd5-90fa-4125-80ba-bd611647bc3f"
		},
		"a0e573e2-2c4e-4b4c-b27d-06e9bad8d6e8": {
			"classDefinition": "com.sap.bpm.wfs.ui.ExclusiveGatewaySymbol",
			"x": 225,
			"y": 806,
			"object": "d7b3e6e6-1e2e-4118-b297-2ccb22582a70"
		},
		"5ce6341c-5a92-419f-8af5-1eb19f4db21b": {
			"classDefinition": "com.sap.bpm.wfs.ui.ExclusiveGatewaySymbol",
			"x": 716,
			"y": 815,
			"object": "b49db90c-d9a6-4b01-b3e9-f68df3545fa6"
		},
		"ab85f4c9-b27f-49d6-933c-8617b141a57d": {
			"classDefinition": "com.sap.bpm.wfs.ui.ExclusiveGatewaySymbol",
			"x": 225,
			"y": 914,
			"object": "5af2cc0a-d6f2-4323-9b20-53f92c8e1c4d"
		},
		"556af571-f4f5-488f-a049-e72cf45ceea3": {
			"classDefinition": "com.sap.bpm.wfs.ui.ExclusiveGatewaySymbol",
			"x": 716,
			"y": 923,
			"object": "1adfd1e2-4072-4a99-b6c0-944d516f1835"
		},
		"bb56de28-5ce2-459c-a76f-d7e93e811557": {
			"classDefinition": "com.sap.bpm.wfs.ui.SequenceFlowSymbol",
			"points": "246,487 402,487",
			"sourceSymbol": "d16b919c-f8aa-4ec1-bf5e-85503453c7e0",
			"targetSymbol": "f33ea063-ca7a-47a3-96d5-f58534ffc84a",
			"object": "b13147e8-0f96-4e3b-b863-c7c2adbb3e7d"
		},
		"75b9fd3d-2797-4ec0-a34e-9de66677f55f": {
			"classDefinition": "com.sap.bpm.wfs.ui.SequenceFlowSymbol",
			"points": "246,624 399,624",
			"sourceSymbol": "7b155adb-21c8-4764-b63a-b3eba8d69876",
			"targetSymbol": "c181edf2-dd90-4c53-b4d5-36d4d4a37a89",
			"object": "e9219f80-c646-483f-9b3e-889fc279392c"
		},
		"3ae7a141-d8e1-4737-ab7c-3a418334522d": {
			"classDefinition": "com.sap.bpm.wfs.ui.SequenceFlowSymbol",
			"points": "267,728 374,728",
			"sourceSymbol": "098bdc89-1ed3-407d-97d8-769e815eb563",
			"targetSymbol": "6660ba91-9b62-4e5b-9768-555a415b3dfe",
			"object": "8a26702e-39f2-40ab-9f42-126e44b2bff5"
		},
		"0efec81a-84d8-4679-939e-c5a2c75f3cb5": {
			"classDefinition": "com.sap.bpm.wfs.ui.SequenceFlowSymbol",
			"points": "246,827 322.5,827 322.5,836 399,836",
			"sourceSymbol": "a0e573e2-2c4e-4b4c-b27d-06e9bad8d6e8",
			"targetSymbol": "82f336ef-479a-4b36-add1-d742fda9788d",
			"object": "b42b2ec8-8bee-45e3-89ff-d2e0bdeb21c1"
		},
		"613c6727-ea91-46d6-8b21-251f92cc56b1": {
			"classDefinition": "com.sap.bpm.wfs.ui.SequenceFlowSymbol",
			"points": "246,933 396,933",
			"sourceSymbol": "ab85f4c9-b27f-49d6-933c-8617b141a57d",
			"targetSymbol": "8e928e54-effc-471d-82f9-3eaba2671ea9",
			"object": "008fa70c-9cb3-474d-9411-15960ccc30d3"
		},
		"5f256bd5-18be-4c78-9e82-7fc8cde6f5bf": {
			"classDefinition": "com.sap.bpm.wfs.ui.SequenceFlowSymbol",
			"points": "594,489 735,489",
			"sourceSymbol": "080ff312-bee1-4f11-add7-b38f682fd08f",
			"targetSymbol": "d3cca1bf-bd03-4932-9367-dedee92cd914",
			"object": "b8121ac3-efb3-4cf7-a6bc-625c3d29f899"
		},
		"cec48d61-c5b1-4fad-81d9-c2e91d6674bd": {
			"classDefinition": "com.sap.bpm.wfs.ui.SequenceFlowSymbol",
			"points": "594,617 737,617",
			"sourceSymbol": "645f27c0-0ef2-4bc4-a135-1566998c9ed9",
			"targetSymbol": "1d75471c-fb62-4ac5-8129-f0c18e0c60df",
			"object": "6b0c9026-853f-4e9d-a260-a9a52b956bef"
		},
		"10fac113-08c7-40a3-b70e-5865da8fe4e9": {
			"classDefinition": "com.sap.bpm.wfs.ui.SequenceFlowSymbol",
			"points": "594,730 737,730",
			"sourceSymbol": "ff074dac-fac9-4887-b709-3a6f1c26a0d4",
			"targetSymbol": "43812f6c-4276-49cd-8a44-8e33ddc638e9",
			"object": "61836292-3ef0-4388-9b78-c927a2e3afc8"
		},
		"299fe263-edb7-4bdb-991d-6751b009da42": {
			"classDefinition": "com.sap.bpm.wfs.ui.SequenceFlowSymbol",
			"points": "594,836 737,836",
			"sourceSymbol": "b0a796b8-d733-4c18-8b05-32293dee5597",
			"targetSymbol": "5ce6341c-5a92-419f-8af5-1eb19f4db21b",
			"object": "52a3b1c6-23b1-436a-a87c-fcca5f5df7ce"
		},
		"03c14124-ce5b-4765-8843-f2e3fc4b1d45": {
			"classDefinition": "com.sap.bpm.wfs.ui.SequenceFlowSymbol",
			"points": "594,944 737,944",
			"sourceSymbol": "669b0480-1858-454c-b7af-d7b2a462e8aa",
			"targetSymbol": "556af571-f4f5-488f-a049-e72cf45ceea3",
			"object": "6aec8ddb-711f-4139-940f-962edcdf504e"
		},
		"fdbccab3-cfee-458b-a29d-8c35dfd307b0": {
			"classDefinition": "com.sap.bpm.wfs.ui.SequenceFlowSymbol",
			"points": "246,489 246,429 737,429 737,489",
			"sourceSymbol": "d16b919c-f8aa-4ec1-bf5e-85503453c7e0",
			"targetSymbol": "d3cca1bf-bd03-4932-9367-dedee92cd914",
			"object": "4b043c97-5cb1-4d06-842f-c2f1f52ab28c"
		},
		"ca51b2a2-bff8-4559-848e-8ff1489c327b": {
			"classDefinition": "com.sap.bpm.wfs.ui.SequenceFlowSymbol",
			"points": "246,626 246,550.5 730,550.5 730,617",
			"sourceSymbol": "7b155adb-21c8-4764-b63a-b3eba8d69876",
			"targetSymbol": "1d75471c-fb62-4ac5-8129-f0c18e0c60df",
			"object": "54ae69ff-41c4-4bde-93a0-394327249077"
		},
		"cb0775b0-71d1-41c9-a22e-83a2bcdfcebf": {
			"classDefinition": "com.sap.bpm.wfs.ui.SequenceFlowSymbol",
			"points": "246,730 246,672 737,672 737,730",
			"sourceSymbol": "098bdc89-1ed3-407d-97d8-769e815eb563",
			"targetSymbol": "43812f6c-4276-49cd-8a44-8e33ddc638e9",
			"object": "c923719a-7bc3-4bba-bfe9-90e06d7d2386"
		},
		"51aab287-e09f-4c66-a104-e7529dcb073c": {
			"classDefinition": "com.sap.bpm.wfs.ui.SequenceFlowSymbol",
			"points": "246,831.5 246,785 737,785 737,831.5",
			"sourceSymbol": "a0e573e2-2c4e-4b4c-b27d-06e9bad8d6e8",
			"targetSymbol": "5ce6341c-5a92-419f-8af5-1eb19f4db21b",
			"object": "72ea2028-b339-469c-bf19-3efa52908865"
		},
		"efb127aa-9d29-49f7-9c5b-e262d3bbe1dc": {
			"classDefinition": "com.sap.bpm.wfs.ui.SequenceFlowSymbol",
			"points": "246,935 246,883 737,883 737,944",
			"sourceSymbol": "ab85f4c9-b27f-49d6-933c-8617b141a57d",
			"targetSymbol": "556af571-f4f5-488f-a049-e72cf45ceea3",
			"object": "5dd1a722-36f3-45a3-b0aa-6178251ab7ba"
		},
		"2b1921eb-8206-4f50-a46a-cd6cbf31f7f8": {
			"classDefinition": "com.sap.bpm.wfs.ui.SequenceFlowSymbol",
			"points": "737,490 737,302.5 1065,302.5 1065,116",
			"sourceSymbol": "d3cca1bf-bd03-4932-9367-dedee92cd914",
			"targetSymbol": "c8755d70-ca53-4a15-92db-ed130e9afd9d",
			"object": "579eaa5d-209f-45b6-98aa-e1aadea45206"
		},
		"ea5233a1-d516-4654-b70d-6370d534cfe3": {
			"classDefinition": "com.sap.bpm.wfs.ui.SequenceFlowSymbol",
			"points": "737,616 737,366.5 1066,366.5 1066,123",
			"sourceSymbol": "1d75471c-fb62-4ac5-8129-f0c18e0c60df",
			"targetSymbol": "c8755d70-ca53-4a15-92db-ed130e9afd9d",
			"object": "e7f0a68a-75aa-453a-b90e-9f303de631a5"
		},
		"8f4abf0d-8dd4-4b22-af13-fd31db26551c": {
			"classDefinition": "com.sap.bpm.wfs.ui.SequenceFlowSymbol",
			"points": "737,729 737,423 1065,423 1065,116",
			"sourceSymbol": "43812f6c-4276-49cd-8a44-8e33ddc638e9",
			"targetSymbol": "c8755d70-ca53-4a15-92db-ed130e9afd9d",
			"object": "85d973e0-932f-4319-857d-aee77a9a12f7"
		},
		"df88abde-3ef6-4d58-bd98-e7bbe4c80a6e": {
			"classDefinition": "com.sap.bpm.wfs.ui.SequenceFlowSymbol",
			"points": "737,837 737,476 1065,476 1065,116",
			"sourceSymbol": "5ce6341c-5a92-419f-8af5-1eb19f4db21b",
			"targetSymbol": "c8755d70-ca53-4a15-92db-ed130e9afd9d",
			"object": "f4cc5e80-05d4-4e83-8643-d00e5878e7ff"
		},
		"7fb75b22-e03f-4ef1-b87c-caab950a6f7d": {
			"classDefinition": "com.sap.bpm.wfs.ui.SequenceFlowSymbol",
			"points": "737,945 737,530 1065,530 1065,116",
			"sourceSymbol": "556af571-f4f5-488f-a049-e72cf45ceea3",
			"targetSymbol": "c8755d70-ca53-4a15-92db-ed130e9afd9d",
			"object": "f0162dd0-c3dc-47cc-b30a-2ac005d9f1a6"
		},
		"eca2cdd0-16b0-4436-b748-4e8d9adb7abe": {
			"classDefinition": "com.sap.bpm.wfs.ui.ExclusiveGatewaySymbol",
			"x": 82,
			"y": 95,
			"object": "8e3e3683-8559-4672-bff6-255bd3c88b8e"
		},
		"845f601c-e044-4105-81d9-3582f0038488": {
			"classDefinition": "com.sap.bpm.wfs.ui.SequenceFlowSymbol",
			"points": "103,116 103,-209 117.5,-209",
			"sourceSymbol": "eca2cdd0-16b0-4436-b748-4e8d9adb7abe",
			"targetSymbol": "f95b65b6-549b-48dd-9be3-11da94d25c37",
			"object": "f26aa50a-7aff-4cf7-977a-86dc670e72cd"
		},
		"4bd5fa56-8235-4cc8-8e99-16a05bccc4f2": {
			"classDefinition": "com.sap.bpm.wfs.ui.ExclusiveGatewaySymbol",
			"x": 1119,
			"y": 95,
			"object": "cf01cf43-9c57-45c4-a7d8-26978f858471"
		},
		"0a294c54-eb89-420d-b405-dc6bca2214db": {
			"classDefinition": "com.sap.bpm.wfs.ui.SequenceFlowSymbol",
			"points": "1140,116 1234,116",
			"sourceSymbol": "4bd5fa56-8235-4cc8-8e99-16a05bccc4f2",
			"targetSymbol": "9d8853de-4696-435c-8c56-c049a899bb22",
			"object": "8505e222-5e24-41e9-9b19-11a2a7bdf72f"
		},
		"63d479d4-bf00-47a6-85e7-d8191958e7c4": {
			"classDefinition": "com.sap.bpm.wfs.ui.SequenceFlowSymbol",
			"points": "103,116 103,-48 1140,-48 1140,116",
			"sourceSymbol": "eca2cdd0-16b0-4436-b748-4e8d9adb7abe",
			"targetSymbol": "4bd5fa56-8235-4cc8-8e99-16a05bccc4f2",
			"object": "3799fafa-38cb-4f57-926e-ac11a9937e4d"
		},
		"9d8853de-4696-435c-8c56-c049a899bb22": {
			"classDefinition": "com.sap.bpm.wfs.ui.ScriptTaskSymbol",
			"x": 1184,
			"y": 86,
			"width": 100,
			"height": 60,
			"object": "cdeb5c9f-4521-41ee-9890-064ee3bca80f"
		},
		"dabf1644-3495-43f2-bed4-7425c17b7a1b": {
			"classDefinition": "com.sap.bpm.wfs.ui.SequenceFlowSymbol",
			"points": "1234,116.75 1330.5,116.75",
			"sourceSymbol": "9d8853de-4696-435c-8c56-c049a899bb22",
			"targetSymbol": "53e54950-7757-4161-82c9-afa7e86cff2c",
			"object": "4f2fd127-009e-4c3a-822e-b07e7236c97d"
		},
		"77974bea-f341-42b6-ae49-84444f8eba30": {
			"classDefinition": "com.sap.bpm.wfs.ui.ParallelGatewaySymbol",
			"x": 294,
			"y": 95,
			"object": "d2d88835-8b62-49b6-9b72-ffbef218e692"
		},
		"4e94d975-c0ae-4edf-8166-34694b8b3866": {
			"classDefinition": "com.sap.bpm.wfs.ui.SequenceFlowSymbol",
			"points": "315,116 594,116",
			"sourceSymbol": "77974bea-f341-42b6-ae49-84444f8eba30",
			"targetSymbol": "a2d644fd-efdd-4af0-8dcd-2fb2813e95fa",
			"object": "5775a767-e4eb-49f7-ae65-0f1cf6292be6"
		},
		"e68d98a4-97c4-48dd-8e40-d938b392d5d3": {
			"classDefinition": "com.sap.bpm.wfs.ui.EndEventSymbol",
			"x": -205.5,
			"y": -159.5,
			"width": 35,
			"height": 35,
			"object": "3a1ad685-00b4-4e74-a709-d871bbb6e4df"
		},
		"8e928e54-effc-471d-82f9-3eaba2671ea9": {
			"classDefinition": "com.sap.bpm.wfs.ui.ParallelGatewaySymbol",
			"x": 375,
			"y": 910,
			"object": "4f5737ad-7646-4347-8e41-4a03895d8e42"
		},
		"b893ca0b-029e-4f47-95b3-073537087917": {
			"classDefinition": "com.sap.bpm.wfs.ui.SequenceFlowSymbol",
			"points": "396,931 480.5,931 480.5,944 594,944",
			"sourceSymbol": "8e928e54-effc-471d-82f9-3eaba2671ea9",
			"targetSymbol": "669b0480-1858-454c-b7af-d7b2a462e8aa",
			"object": "a58b8c05-8770-477e-8667-f62ac2b9d77a"
		},
		"82f336ef-479a-4b36-add1-d742fda9788d": {
			"classDefinition": "com.sap.bpm.wfs.ui.ParallelGatewaySymbol",
			"x": 378,
			"y": 815,
			"object": "5fa83431-3f32-49ed-8443-fc5308b9275f"
		},
		"0ddd65c4-5cad-45be-a9f6-ffe4dacbf451": {
			"classDefinition": "com.sap.bpm.wfs.ui.SequenceFlowSymbol",
			"points": "399,836 594,836",
			"sourceSymbol": "82f336ef-479a-4b36-add1-d742fda9788d",
			"targetSymbol": "b0a796b8-d733-4c18-8b05-32293dee5597",
			"object": "091d0eb7-0555-461c-8771-c6f6cf8e3bd6"
		},
		"6660ba91-9b62-4e5b-9768-555a415b3dfe": {
			"classDefinition": "com.sap.bpm.wfs.ui.ParallelGatewaySymbol",
			"x": 374,
			"y": 705,
			"object": "c0b425b8-75b6-42cb-b79c-a0dc3beb0fa4"
		},
		"edd78c37-6d3b-42d7-9399-d34131b7f931": {
			"classDefinition": "com.sap.bpm.wfs.ui.SequenceFlowSymbol",
			"points": "395,728 594,728",
			"sourceSymbol": "6660ba91-9b62-4e5b-9768-555a415b3dfe",
			"targetSymbol": "ff074dac-fac9-4887-b709-3a6f1c26a0d4",
			"object": "0a8e7262-c324-47e8-9291-9562d2bb57cb"
		},
		"c181edf2-dd90-4c53-b4d5-36d4d4a37a89": {
			"classDefinition": "com.sap.bpm.wfs.ui.ParallelGatewaySymbol",
			"x": 378,
			"y": 601,
			"object": "87745008-4217-4157-aae3-e39c5243da05"
		},
		"1252ae08-fd9c-4c3f-ae58-a247d2a168b9": {
			"classDefinition": "com.sap.bpm.wfs.ui.SequenceFlowSymbol",
			"points": "399,619.5 594,619.5",
			"sourceSymbol": "c181edf2-dd90-4c53-b4d5-36d4d4a37a89",
			"targetSymbol": "645f27c0-0ef2-4bc4-a135-1566998c9ed9",
			"object": "878fd8c8-37a7-42aa-bf4a-c05fb15a90f2"
		},
		"f33ea063-ca7a-47a3-96d5-f58534ffc84a": {
			"classDefinition": "com.sap.bpm.wfs.ui.ParallelGatewaySymbol",
			"x": 381,
			"y": 464,
			"object": "ac22a0d2-4936-4441-8ef5-ce98b9949c24"
		},
		"d9cc8559-5955-4912-bb7d-acbfb9f64216": {
			"classDefinition": "com.sap.bpm.wfs.ui.SequenceFlowSymbol",
			"points": "402,487 594,487",
			"sourceSymbol": "f33ea063-ca7a-47a3-96d5-f58534ffc84a",
			"targetSymbol": "080ff312-bee1-4f11-add7-b38f682fd08f",
			"object": "899cc076-9905-4f4b-83f0-e67f664bb441"
		},
		"9ff164c7-ce7f-4af7-8228-f23e2c8d45b9": {
			"classDefinition": "com.sap.bpm.wfs.ui.ParallelGatewaySymbol",
			"x": 381,
			"y": 328,
			"object": "bd7c7a68-29c0-483f-9067-52c142105c6c"
		},
		"f519bccf-7812-47ee-b170-a502d898546e": {
			"classDefinition": "com.sap.bpm.wfs.ui.SequenceFlowSymbol",
			"points": "402,349 483.5,349 483.5,362 594,362",
			"sourceSymbol": "9ff164c7-ce7f-4af7-8228-f23e2c8d45b9",
			"targetSymbol": "40dea7c1-8a60-45e0-a97b-0e41fe67c1e9",
			"object": "315c04f9-4e62-4a52-b779-2be58231bb5e"
		},
		"99cc6407-1cef-44f9-8b74-330e1f8c07cc": {
			"classDefinition": "com.sap.bpm.wfs.ui.ParallelGatewaySymbol",
			"x": 381,
			"y": 217,
			"object": "96824a9e-1300-4901-9d5e-06dc260131d6"
		},
		"1d2b8eff-578a-4165-a1d4-dc6133ef02f0": {
			"classDefinition": "com.sap.bpm.wfs.ui.SequenceFlowSymbol",
			"points": "402,240 594,240",
			"sourceSymbol": "99cc6407-1cef-44f9-8b74-330e1f8c07cc",
			"targetSymbol": "c00c79fd-e010-40df-886b-ca3c4dff1b46",
			"object": "94875d99-46fe-4807-8b09-286156cbb47c"
		},
		"b7074491-bf50-409f-800b-9e3d172cbe84": {
			"classDefinition": "com.sap.bpm.wfs.ui.SequenceFlowSymbol",
			"points": "173,116 173,241 240,241",
			"sourceSymbol": "a0f53102-4092-4401-be9e-c9e058fc627d",
			"targetSymbol": "7a143ec1-e59e-4170-bd2c-a912e404388c",
			"object": "876cb3b0-cd43-4962-8f6a-42cdc86fcaa5"
		},
		"7434fc41-ba18-4c5e-af5f-791b57d8bd72": {
			"classDefinition": "com.sap.bpm.wfs.ui.SequenceFlowSymbol",
			"points": "173,116 173,347 242,347",
			"sourceSymbol": "a0f53102-4092-4401-be9e-c9e058fc627d",
			"targetSymbol": "a8a38919-ab32-44f8-9efc-bf2c55af76fb",
			"object": "e9eaea3a-e2c1-4a0d-84ee-bee0e3c64736"
		},
		"c7421b40-ef36-4097-b856-bdf4e5601c34": {
			"classDefinition": "com.sap.bpm.wfs.ui.SequenceFlowSymbol",
			"points": "173,116 173,484 246,484",
			"sourceSymbol": "a0f53102-4092-4401-be9e-c9e058fc627d",
			"targetSymbol": "d16b919c-f8aa-4ec1-bf5e-85503453c7e0",
			"object": "7cc05049-5add-4447-b455-2dc4c2379587"
		},
		"27ad88d1-3603-413c-8357-1d618f544aab": {
			"classDefinition": "com.sap.bpm.wfs.ui.SequenceFlowSymbol",
			"points": "173,116 173,626 246,626",
			"sourceSymbol": "a0f53102-4092-4401-be9e-c9e058fc627d",
			"targetSymbol": "7b155adb-21c8-4764-b63a-b3eba8d69876",
			"object": "49451b9b-ca8c-4d0a-8a80-3aff44384c1c"
		},
		"0b62eef3-9281-43ea-8e73-3e6d2dc9183d": {
			"classDefinition": "com.sap.bpm.wfs.ui.SequenceFlowSymbol",
			"points": "173,116 173,725 246,725",
			"sourceSymbol": "a0f53102-4092-4401-be9e-c9e058fc627d",
			"targetSymbol": "098bdc89-1ed3-407d-97d8-769e815eb563",
			"object": "c1044401-e301-419c-b8fa-efe87db7ba16"
		},
		"e53935d3-6272-4e86-b115-79ce6d6d0bee": {
			"classDefinition": "com.sap.bpm.wfs.ui.SequenceFlowSymbol",
			"points": "173,116 173,823 246,823",
			"sourceSymbol": "a0f53102-4092-4401-be9e-c9e058fc627d",
			"targetSymbol": "a0e573e2-2c4e-4b4c-b27d-06e9bad8d6e8",
			"object": "64a351bf-68ff-41f9-a387-684b642b34e8"
		},
		"5cb5d58f-797d-4178-abc6-0a425382c004": {
			"classDefinition": "com.sap.bpm.wfs.ui.SequenceFlowSymbol",
			"points": "173,116 173,934 246,934",
			"sourceSymbol": "a0f53102-4092-4401-be9e-c9e058fc627d",
			"targetSymbol": "ab85f4c9-b27f-49d6-933c-8617b141a57d",
			"object": "8e1e2a08-fc5a-4408-8416-c755e953644f"
		},
		"6f4af97b-d542-4206-9ba2-a13971432e75": {
			"classDefinition": "com.sap.bpm.wfs.ui.SequenceFlowSymbol",
			"points": "169.5,116 169.5,386 64.5,386",
			"sourceSymbol": "a0f53102-4092-4401-be9e-c9e058fc627d",
			"targetSymbol": "2e5ba272-9f16-4ae2-9b2c-e5a5c8be8dd5",
			"object": "234b0f27-f579-4ace-9e89-bf4740e1c1c2"
		},
		"2e5ba272-9f16-4ae2-9b2c-e5a5c8be8dd5": {
			"classDefinition": "com.sap.bpm.wfs.ui.ServiceTaskSymbol",
			"x": 11,
			"y": 350,
			"width": 100,
			"height": 60,
			"object": "a86fc885-fe92-4b5e-a79d-aab76291a99c"
		},
		"fc60674b-5e0f-429d-b5e4-503855927294": {
			"classDefinition": "com.sap.bpm.wfs.ui.ServiceTaskSymbol",
			"x": -325,
			"y": 302,
			"width": 100,
			"height": 60,
			"object": "e6119cd1-7adb-4461-80df-cc2990d6c532"
		},
		"66778cef-9ebb-47bb-9da4-6f5edc9dc987": {
			"classDefinition": "com.sap.bpm.wfs.ui.SequenceFlowSymbol",
			"points": "-275,332 -275,-146 -188,-146",
			"sourceSymbol": "fc60674b-5e0f-429d-b5e4-503855927294",
			"targetSymbol": "e68d98a4-97c4-48dd-8e40-d938b392d5d3",
			"object": "c9e9325e-5364-4693-bea9-e49fb65ef5fc"
		},
		"77af5875-dbe6-4583-89b7-7088e0a5bd70": {
			"classDefinition": "com.sap.bpm.wfs.ui.SequenceFlowSymbol",
			"points": "173,116 173,335 -250,335",
			"sourceSymbol": "a0f53102-4092-4401-be9e-c9e058fc627d",
			"targetSymbol": "fc60674b-5e0f-429d-b5e4-503855927294",
			"object": "95c46d7e-05de-44e6-a0d2-46cb655a9b40"
		},
		"2f97f417-6af6-4996-aa34-8d7a3892761d": {
			"classDefinition": "com.sap.bpm.wfs.ui.SequenceFlowSymbol",
			"points": "61,380 61,453 -181,453 -181,-138",
			"sourceSymbol": "2e5ba272-9f16-4ae2-9b2c-e5a5c8be8dd5",
			"targetSymbol": "e68d98a4-97c4-48dd-8e40-d938b392d5d3",
			"object": "a1ac20f2-3c31-4141-ab17-be3e6e7dc6e0"
		},
		"f95b65b6-549b-48dd-9be3-11da94d25c37": {
			"classDefinition": "com.sap.bpm.wfs.ui.ServiceTaskSymbol",
			"x": 117,
			"y": -239,
			"width": 100,
			"height": 60,
			"object": "2c3c2ec0-ae4b-48e0-b816-e10c5e97c0d9"
		},
		"77023329-c380-4941-ad27-bf4b4105b383": {
			"classDefinition": "com.sap.bpm.wfs.ui.SequenceFlowSymbol",
			"points": "167,-209 167,108",
			"sourceSymbol": "f95b65b6-549b-48dd-9be3-11da94d25c37",
			"targetSymbol": "a0f53102-4092-4401-be9e-c9e058fc627d",
			"object": "e3862dea-1bdd-4613-9f6a-1d49d27138fe"
		},
		"62d7f4ed-4063-4c44-af8b-39050bd44926": {
			"classDefinition": "com.sap.bpm.wfs.LastIDs",
			"maildefinition": 2,
			"sequenceflow": 125,
			"startevent": 1,
			"endevent": 2,
			"usertask": 8,
			"servicetask": 14,
			"scripttask": 2,
			"mailtask": 3,
			"exclusivegateway": 26,
			"parallelgateway": 20
		}
	}
}