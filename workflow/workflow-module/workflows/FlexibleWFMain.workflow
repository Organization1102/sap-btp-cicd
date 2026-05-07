{
	"contents": {
		"01614e8a-b815-41c9-8f3b-c3a6a4e7cc44": {
			"classDefinition": "com.sap.bpm.wfs.Model",
			"id": "kupit.flexiblewf.main",
			"subject": "FlexibleWFMain",
			"businessKey": "",
			"name": "FlexibleWFMain",
			"documentation": "",
			"lastIds": "62d7f4ed-4063-4c44-af8b-39050bd44926",
			"events": {
				"11a9b5ee-17c0-4159-9bbf-454dcfdcd5c3": {
					"name": "StartEvent1"
				},
				"2798f4e7-bc42-4fad-a248-159095a2f40a": {
					"name": "EndEvent1"
				}
			},
			"activities": {
				"a9ca9b39-4263-4521-961c-619ee753a07b": {
					"name": "Level1Approvers"
				},
				"145f9b20-42eb-477b-99d1-b8c76638e3bc": {
					"name": "Level2Approvers"
				},
				"54121eec-9eba-4aa8-aa2a-017b3fcef3b9": {
					"name": "Level3Approvers"
				},
				"967dedaa-de6a-4de5-9457-49dede0bd64d": {
					"name": "InitTask"
				},
				"3cfca574-9547-4d08-b490-1a3aa429dbc0": {
					"name": "CalcFinalStatus"
				},
				"6b95937c-3f6d-4965-b9d8-de0b71cf4ac3": {
					"name": "CheckSkipLevel2"
				},
				"fb682bf4-d6b5-43fc-ae71-a7ebf6139fd7": {
					"name": "CheckSkipLevel3"
				},
				"bafc6d68-4619-4bfd-9216-cc273176ffe8": {
					"name": "BeforeCalc"
				},
				"9cac6089-58f6-44ab-b595-4fe63b396b4b": {
					"name": "CheckSkipLevel1"
				},
				"59184350-a17f-4916-882c-fe79fc660946": {
					"name": "UpdateWorkflowHana"
				},
				"520e313a-89d5-4645-a061-85e7463985ec": {
					"name": "SendFinalEmail"
				}
			},
			"sequenceFlows": {
				"c6b99f32-5fe6-4ab6-b60a-80fba1b9ae0f": {
					"name": "SequenceFlow1"
				},
				"e954f258-c46a-49ce-b199-30d99f6f8413": {
					"name": "SequenceFlow2"
				},
				"0223402c-33d7-4849-bed1-f28b8d1ac65b": {
					"name": "SequenceFlow3"
				},
				"02421d74-2d71-4607-a9b0-1754e58a0839": {
					"name": "SequenceFlow4"
				},
				"a706edd4-9ad9-4b89-833c-88ff8e182609": {
					"name": "SequenceFlow5"
				},
				"72f92db9-28a5-4c9f-a8fa-cad12938f1e4": {
					"name": "SequenceFlow7"
				},
				"84926453-3034-40f1-a7ff-48ac1035fe83": {
					"name": "SequenceFlow8"
				},
				"bfa44f38-df70-467b-9b6c-114668c8f41f": {
					"name": "SequenceFlow10"
				},
				"c2494e7e-ae60-4093-8527-706cf1878409": {
					"name": "SequenceFlow12"
				},
				"5b0f4025-5382-4340-839a-4eb43999d735": {
					"name": "SkipLevel2"
				},
				"1808779b-88d1-4041-b173-80812860ff3c": {
					"name": "SkipLevel3"
				},
				"47136fc9-d24f-4f4c-b9b1-64b4b5123437": {
					"name": "SequenceFlow15"
				},
				"6e8d72cc-0e98-4335-b51b-424d0e008262": {
					"name": "SkipLevel1"
				},
				"37a577ac-fc2f-4ae5-91dc-79e0f08c2218": {
					"name": "SequenceFlow17"
				},
				"d96a4760-9314-400c-9fb4-faf04b9667da": {
					"name": "SequenceFlow18"
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
		"a9ca9b39-4263-4521-961c-619ee753a07b": {
			"classDefinition": "com.sap.bpm.wfs.ReferencedSubflow",
			"workflowReference": "/workflows/FlexibleWFParallel.workflow",
			"definitionId": "kupit.flexiblewf.flexiblewfparallel",
			"inParameters": [{
				"sourceExpression": "${context.additionalInfo}",
				"targetVariable": "${context.additionalInfo}"
			}, {
				"sourceExpression": "${context.fullDescription}",
				"targetVariable": "${context.fullDescription}"
			}, {
				"sourceExpression": "${context.subject}",
				"targetVariable": "${context.subject}"
			}, {
				"sourceExpression": "${context.hana_id}",
				"targetVariable": "${context.hana_id}"
			}, {
				"sourceExpression": "${context.level1.approver_8}",
				"targetVariable": "${context.approver_8}"
			}, {
				"sourceExpression": "${context.level1.approver_7}",
				"targetVariable": "${context.approver_7}"
			}, {
				"sourceExpression": "${context.level1.approver_6}",
				"targetVariable": "${context.approver_6}"
			}, {
				"sourceExpression": "${context.level1.approver_5}",
				"targetVariable": "${context.approver_5}"
			}, {
				"sourceExpression": "${context.level1.approver_4}",
				"targetVariable": "${context.approver_4}"
			}, {
				"sourceExpression": "${context.level1.approver_3}",
				"targetVariable": "${context.approver_3}"
			}, {
				"sourceExpression": "${context.level1.approver_2}",
				"targetVariable": "${context.approver_2}"
			}, {
				"sourceExpression": "${context.level1.approver_1}",
				"targetVariable": "${context.approver_1}"
			}, {
				"sourceExpression": "${context.level1.lvl_number}",
				"targetVariable": "${context.currentLevel}"
			}],
			"outParameters": [{
				"sourceExpression": "${context.skipNext}",
				"targetVariable": "${context.level1.skipNext}"
			}, {
				"sourceExpression": "${context.approver_8}",
				"targetVariable": "${context.level1.approver_8}"
			}, {
				"sourceExpression": "${context.approver_7}",
				"targetVariable": "${context.level1.approver_7}"
			}, {
				"sourceExpression": "${context.approver_6}",
				"targetVariable": "${context.level1.approver_6}"
			}, {
				"sourceExpression": "${context.approver_5}",
				"targetVariable": "${context.level1.approver_5}"
			}, {
				"sourceExpression": "${context.approver_4}",
				"targetVariable": "${context.level1.approver_4}"
			}, {
				"sourceExpression": "${context.approver_3}",
				"targetVariable": "${context.level1.approver_3}"
			}, {
				"sourceExpression": "${context.approver_2}",
				"targetVariable": "${context.level1.approver_2}"
			}, {
				"sourceExpression": "${context.approver_1}",
				"targetVariable": "${context.level1.approver_1}"
			}],
			"id": "referencedsubflow1",
			"name": "Level1Approvers",
			"principalPropagationRef": "11a9b5ee-17c0-4159-9bbf-454dcfdcd5c3"
		},
		"145f9b20-42eb-477b-99d1-b8c76638e3bc": {
			"classDefinition": "com.sap.bpm.wfs.ReferencedSubflow",
			"workflowReference": "/workflows/FlexibleWFParallel.workflow",
			"definitionId": "kupit.flexiblewf.flexiblewfparallel",
			"inParameters": [{
				"sourceExpression": "${context.additionalInfo}",
				"targetVariable": "${context.additionalInfo}"
			}, {
				"sourceExpression": "${context.fullDescription}",
				"targetVariable": "${context.fullDescription}"
			}, {
				"sourceExpression": "${context.subject}",
				"targetVariable": "${context.subject}"
			}, {
				"sourceExpression": "${context.hana_id}",
				"targetVariable": "${context.hana_id}"
			}, {
				"sourceExpression": "${context.level2.approver_8}",
				"targetVariable": "${context.approver_8}"
			}, {
				"sourceExpression": "${context.level2.approver_7}",
				"targetVariable": "${context.approver_7}"
			}, {
				"sourceExpression": "${context.level2.approver_6}",
				"targetVariable": "${context.approver_6}"
			}, {
				"sourceExpression": "${context.level2.approver_5}",
				"targetVariable": "${context.approver_5}"
			}, {
				"sourceExpression": "${context.level2.approver_4}",
				"targetVariable": "${context.approver_4}"
			}, {
				"sourceExpression": "${context.level2.approver_3}",
				"targetVariable": "${context.approver_3}"
			}, {
				"sourceExpression": "${context.level2.approver_2}",
				"targetVariable": "${context.approver_2}"
			}, {
				"sourceExpression": "${context.level2.approver_1}",
				"targetVariable": "${context.approver_1}"
			}, {
				"sourceExpression": "${context.level2.lvl_number}",
				"targetVariable": "${context.currentLevel}"
			}],
			"outParameters": [{
				"sourceExpression": "${context.skipNext}",
				"targetVariable": "${context.level2.skipNext}"
			}, {
				"sourceExpression": "${context.approver_8}",
				"targetVariable": "${context.level2.approver_8}"
			}, {
				"sourceExpression": "${context.approver_7}",
				"targetVariable": "${context.level2.approver_7}"
			}, {
				"sourceExpression": "${context.approver_6}",
				"targetVariable": "${context.level2.approver_6}"
			}, {
				"sourceExpression": "${context.approver_5}",
				"targetVariable": "${context.level2.approver_5}"
			}, {
				"sourceExpression": "${context.approver_4}",
				"targetVariable": "${context.level2.approver_4}"
			}, {
				"sourceExpression": "${context.approver_3}",
				"targetVariable": "${context.level2.approver_3}"
			}, {
				"sourceExpression": "${context.approver_2}",
				"targetVariable": "${context.level2.approver_2}"
			}, {
				"sourceExpression": "${context.approver_1}",
				"targetVariable": "${context.level2.approver_1}"
			}],
			"id": "referencedsubflow2",
			"name": "Level2Approvers",
			"principalPropagationRef": "11a9b5ee-17c0-4159-9bbf-454dcfdcd5c3"
		},
		"54121eec-9eba-4aa8-aa2a-017b3fcef3b9": {
			"classDefinition": "com.sap.bpm.wfs.ReferencedSubflow",
			"workflowReference": "/workflows/FlexibleWFParallel.workflow",
			"definitionId": "kupit.flexiblewf.flexiblewfparallel",
			"inParameters": [{
				"sourceExpression": "${context.additionalInfo}",
				"targetVariable": "${context.additionalInfo}"
			}, {
				"sourceExpression": "${context.fullDescription}",
				"targetVariable": "${context.fullDescription}"
			}, {
				"sourceExpression": "${context.subject}",
				"targetVariable": "${context.subject}"
			}, {
				"sourceExpression": "${context.hana_id}",
				"targetVariable": "${context.hana_id}"
			}, {
				"sourceExpression": "${context.level3.approver_8}",
				"targetVariable": "${context.approver_8}"
			}, {
				"sourceExpression": "${context.level3.approver_7}",
				"targetVariable": "${context.approver_7}"
			}, {
				"sourceExpression": "${context.level3.approver_6}",
				"targetVariable": "${context.approver_6}"
			}, {
				"sourceExpression": "${context.level3.approver_5}",
				"targetVariable": "${context.approver_5}"
			}, {
				"sourceExpression": "${context.level3.approver_4}",
				"targetVariable": "${context.approver_4}"
			}, {
				"sourceExpression": "${context.level3.approver_3}",
				"targetVariable": "${context.approver_3}"
			}, {
				"sourceExpression": "${context.level3.approver_2}",
				"targetVariable": "${context.approver_2}"
			}, {
				"sourceExpression": "${context.level3.approver_1}",
				"targetVariable": "${context.approver_1}"
			}, {
				"sourceExpression": "${context.level3.lvl_number}",
				"targetVariable": "${context.currentLevel}"
			}],
			"outParameters": [{
				"sourceExpression": "${context.skipNext}",
				"targetVariable": "${context.level3.skipNext}"
			}, {
				"sourceExpression": "${context.approver_8}",
				"targetVariable": "${context.level3.approver_8}"
			}, {
				"sourceExpression": "${context.approver_7}",
				"targetVariable": "${context.level3.approver_7}"
			}, {
				"sourceExpression": "${context.approver_6}",
				"targetVariable": "${context.level3.approver_6}"
			}, {
				"sourceExpression": "${context.approver_5}",
				"targetVariable": "${context.level3.approver_5}"
			}, {
				"sourceExpression": "${context.approver_4}",
				"targetVariable": "${context.level3.approver_4}"
			}, {
				"sourceExpression": "${context.approver_3}",
				"targetVariable": "${context.level3.approver_3}"
			}, {
				"sourceExpression": "${context.approver_2}",
				"targetVariable": "${context.level3.approver_2}"
			}, {
				"sourceExpression": "${context.approver_1}",
				"targetVariable": "${context.level3.approver_1}"
			}],
			"id": "referencedsubflow3",
			"name": "Level3Approvers",
			"principalPropagationRef": "11a9b5ee-17c0-4159-9bbf-454dcfdcd5c3"
		},
		"967dedaa-de6a-4de5-9457-49dede0bd64d": {
			"classDefinition": "com.sap.bpm.wfs.ScriptTask",
			"reference": "/scripts/FlexibleWFSchema/InitParametersWf.js",
			"id": "scripttask1",
			"name": "InitTask"
		},
		"3cfca574-9547-4d08-b490-1a3aa429dbc0": {
			"classDefinition": "com.sap.bpm.wfs.ScriptTask",
			"reference": "/scripts/FlexibleWFSchema/CalculateFinalStatus.js",
			"id": "scripttask2",
			"name": "CalcFinalStatus"
		},
		"6b95937c-3f6d-4965-b9d8-de0b71cf4ac3": {
			"classDefinition": "com.sap.bpm.wfs.ExclusiveGateway",
			"id": "exclusivegateway1",
			"name": "CheckSkipLevel2",
			"default": "84926453-3034-40f1-a7ff-48ac1035fe83"
		},
		"fb682bf4-d6b5-43fc-ae71-a7ebf6139fd7": {
			"classDefinition": "com.sap.bpm.wfs.ExclusiveGateway",
			"id": "exclusivegateway2",
			"name": "CheckSkipLevel3",
			"default": "bfa44f38-df70-467b-9b6c-114668c8f41f"
		},
		"bafc6d68-4619-4bfd-9216-cc273176ffe8": {
			"classDefinition": "com.sap.bpm.wfs.ExclusiveGateway",
			"id": "exclusivegateway3",
			"name": "BeforeCalc"
		},
		"9cac6089-58f6-44ab-b595-4fe63b396b4b": {
			"classDefinition": "com.sap.bpm.wfs.ExclusiveGateway",
			"id": "exclusivegateway4",
			"name": "CheckSkipLevel1",
			"default": "47136fc9-d24f-4f4c-b9b1-64b4b5123437"
		},
		"59184350-a17f-4916-882c-fe79fc660946": {
			"classDefinition": "com.sap.bpm.wfs.ServiceTask",
			"destination": "kupit-flexiblewf-cap-srv_oauth",
			"destinationSource": "consumer",
			"path": "/v2/catalog/WorkflowAdmin(WorkflowID=${context.hana_id})",
			"httpMethod": "PATCH",
			"requestVariable": "${context.WorkflowRequest}",
			"id": "servicetask2",
			"name": "UpdateWorkflowHana",
			"principalPropagationRef": "11a9b5ee-17c0-4159-9bbf-454dcfdcd5c3"
		},
		"c6b99f32-5fe6-4ab6-b60a-80fba1b9ae0f": {
			"classDefinition": "com.sap.bpm.wfs.SequenceFlow",
			"id": "sequenceflow1",
			"name": "SequenceFlow1",
			"sourceRef": "11a9b5ee-17c0-4159-9bbf-454dcfdcd5c3",
			"targetRef": "967dedaa-de6a-4de5-9457-49dede0bd64d"
		},
		"e954f258-c46a-49ce-b199-30d99f6f8413": {
			"classDefinition": "com.sap.bpm.wfs.SequenceFlow",
			"id": "sequenceflow2",
			"name": "SequenceFlow2",
			"sourceRef": "a9ca9b39-4263-4521-961c-619ee753a07b",
			"targetRef": "6b95937c-3f6d-4965-b9d8-de0b71cf4ac3"
		},
		"0223402c-33d7-4849-bed1-f28b8d1ac65b": {
			"classDefinition": "com.sap.bpm.wfs.SequenceFlow",
			"id": "sequenceflow3",
			"name": "SequenceFlow3",
			"sourceRef": "145f9b20-42eb-477b-99d1-b8c76638e3bc",
			"targetRef": "fb682bf4-d6b5-43fc-ae71-a7ebf6139fd7"
		},
		"02421d74-2d71-4607-a9b0-1754e58a0839": {
			"classDefinition": "com.sap.bpm.wfs.SequenceFlow",
			"id": "sequenceflow4",
			"name": "SequenceFlow4",
			"sourceRef": "54121eec-9eba-4aa8-aa2a-017b3fcef3b9",
			"targetRef": "bafc6d68-4619-4bfd-9216-cc273176ffe8"
		},
		"a706edd4-9ad9-4b89-833c-88ff8e182609": {
			"classDefinition": "com.sap.bpm.wfs.SequenceFlow",
			"id": "sequenceflow5",
			"name": "SequenceFlow5",
			"sourceRef": "967dedaa-de6a-4de5-9457-49dede0bd64d",
			"targetRef": "9cac6089-58f6-44ab-b595-4fe63b396b4b"
		},
		"72f92db9-28a5-4c9f-a8fa-cad12938f1e4": {
			"classDefinition": "com.sap.bpm.wfs.SequenceFlow",
			"id": "sequenceflow7",
			"name": "SequenceFlow7",
			"sourceRef": "3cfca574-9547-4d08-b490-1a3aa429dbc0",
			"targetRef": "59184350-a17f-4916-882c-fe79fc660946"
		},
		"84926453-3034-40f1-a7ff-48ac1035fe83": {
			"classDefinition": "com.sap.bpm.wfs.SequenceFlow",
			"id": "sequenceflow8",
			"name": "SequenceFlow8",
			"sourceRef": "6b95937c-3f6d-4965-b9d8-de0b71cf4ac3",
			"targetRef": "145f9b20-42eb-477b-99d1-b8c76638e3bc"
		},
		"bfa44f38-df70-467b-9b6c-114668c8f41f": {
			"classDefinition": "com.sap.bpm.wfs.SequenceFlow",
			"id": "sequenceflow10",
			"name": "SequenceFlow10",
			"sourceRef": "fb682bf4-d6b5-43fc-ae71-a7ebf6139fd7",
			"targetRef": "54121eec-9eba-4aa8-aa2a-017b3fcef3b9"
		},
		"c2494e7e-ae60-4093-8527-706cf1878409": {
			"classDefinition": "com.sap.bpm.wfs.SequenceFlow",
			"id": "sequenceflow12",
			"name": "SequenceFlow12",
			"sourceRef": "bafc6d68-4619-4bfd-9216-cc273176ffe8",
			"targetRef": "3cfca574-9547-4d08-b490-1a3aa429dbc0"
		},
		"5b0f4025-5382-4340-839a-4eb43999d735": {
			"classDefinition": "com.sap.bpm.wfs.SequenceFlow",
			"condition": "${context.level2.skip == true || context.level1.skipNext == true}",
			"id": "sequenceflow13",
			"name": "SkipLevel2",
			"sourceRef": "6b95937c-3f6d-4965-b9d8-de0b71cf4ac3",
			"targetRef": "bafc6d68-4619-4bfd-9216-cc273176ffe8"
		},
		"1808779b-88d1-4041-b173-80812860ff3c": {
			"classDefinition": "com.sap.bpm.wfs.SequenceFlow",
			"condition": "${context.level3.skip == true || context.level2.skipNext == true}",
			"id": "sequenceflow14",
			"name": "SkipLevel3",
			"sourceRef": "fb682bf4-d6b5-43fc-ae71-a7ebf6139fd7",
			"targetRef": "bafc6d68-4619-4bfd-9216-cc273176ffe8"
		},
		"47136fc9-d24f-4f4c-b9b1-64b4b5123437": {
			"classDefinition": "com.sap.bpm.wfs.SequenceFlow",
			"id": "sequenceflow15",
			"name": "SequenceFlow15",
			"sourceRef": "9cac6089-58f6-44ab-b595-4fe63b396b4b",
			"targetRef": "a9ca9b39-4263-4521-961c-619ee753a07b"
		},
		"6e8d72cc-0e98-4335-b51b-424d0e008262": {
			"classDefinition": "com.sap.bpm.wfs.SequenceFlow",
			"condition": "${context.level1.skip == true}",
			"id": "sequenceflow16",
			"name": "SkipLevel1",
			"sourceRef": "9cac6089-58f6-44ab-b595-4fe63b396b4b",
			"targetRef": "bafc6d68-4619-4bfd-9216-cc273176ffe8"
		},
		"37a577ac-fc2f-4ae5-91dc-79e0f08c2218": {
			"classDefinition": "com.sap.bpm.wfs.SequenceFlow",
			"id": "sequenceflow17",
			"name": "SequenceFlow17",
			"sourceRef": "59184350-a17f-4916-882c-fe79fc660946",
			"targetRef": "520e313a-89d5-4645-a061-85e7463985ec"
		},
		"42fa7a2d-c526-4a02-b3ba-49b5168ba644": {
			"classDefinition": "com.sap.bpm.wfs.ui.Diagram",
			"symbols": {
				"df898b52-91e1-4778-baad-2ad9a261d30e": {},
				"53e54950-7757-4161-82c9-afa7e86cff2c": {},
				"6bb141da-d485-4317-93b8-e17711df4c32": {},
				"a9651752-8436-4ea8-a540-309a9ba27d6e": {},
				"f4242032-5ed9-4b47-84c2-e3e0d1693c5d": {},
				"a8ee13ed-3858-41e5-885f-fc7a2fe7b02a": {},
				"ee99e350-89e6-4f1c-b05b-58c54add988b": {},
				"42ae982f-b982-47b7-b1df-c437af34e9b0": {},
				"60f23aa1-a0e1-4227-8aa3-fab3670c0164": {},
				"44c900a5-7f74-4800-8bee-d5c8a497d7a1": {},
				"5da78e6c-26b2-4cab-82a1-77f22706fed2": {},
				"0092b306-6302-46e9-beed-80df05cea5a6": {},
				"8fb69829-946a-413c-82a2-05bec13019ed": {},
				"3a865d5d-7a2c-40f5-b813-007e3f869a05": {},
				"5a61d648-ed1e-4630-b859-e205caddbef8": {},
				"9388eb1e-4edf-4048-b304-3d9aa25a3714": {},
				"5fbbb7a4-cd5a-4c1a-a5e7-bc768d88929e": {},
				"37aeeb29-3dec-4fbd-aac4-d571fd1f82da": {},
				"a8c1121d-bbad-4d6e-9b30-e004e0c227b2": {},
				"fb484d96-cf9c-4d04-977f-e9a14bd437ed": {},
				"bdebd5c0-c5d7-4cf8-813e-25e22b3c1633": {},
				"ad0ff6c0-377e-48b6-9ecc-8d06ccc0455f": {},
				"f0760959-3e5e-47da-b250-42320462ea9a": {},
				"cdd9066c-1654-426c-89f1-19f86be488f9": {},
				"524c17fc-36fe-4f7f-b5c6-7823015e26a4": {},
				"8c1a6b9e-d22d-47b1-aab5-a981a24431a4": {},
				"f79dc70b-d472-4093-b31d-0ada6933ab5b": {},
				"c566f995-cf24-45cd-bbf8-2353257522df": {}
			}
		},
		"df898b52-91e1-4778-baad-2ad9a261d30e": {
			"classDefinition": "com.sap.bpm.wfs.ui.StartEventSymbol",
			"x": 100,
			"y": 100,
			"width": 32,
			"height": 32,
			"object": "11a9b5ee-17c0-4159-9bbf-454dcfdcd5c3"
		},
		"53e54950-7757-4161-82c9-afa7e86cff2c": {
			"classDefinition": "com.sap.bpm.wfs.ui.EndEventSymbol",
			"x": 1659,
			"y": 99,
			"width": 35,
			"height": 35,
			"object": "2798f4e7-bc42-4fad-a248-159095a2f40a"
		},
		"6bb141da-d485-4317-93b8-e17711df4c32": {
			"classDefinition": "com.sap.bpm.wfs.ui.SequenceFlowSymbol",
			"points": "116,116 257,116",
			"sourceSymbol": "df898b52-91e1-4778-baad-2ad9a261d30e",
			"targetSymbol": "44c900a5-7f74-4800-8bee-d5c8a497d7a1",
			"object": "c6b99f32-5fe6-4ab6-b60a-80fba1b9ae0f"
		},
		"a9651752-8436-4ea8-a540-309a9ba27d6e": {
			"classDefinition": "com.sap.bpm.wfs.ui.ReferencedSubflowSymbol",
			"x": 457,
			"y": 86,
			"width": 100,
			"height": 60,
			"object": "a9ca9b39-4263-4521-961c-619ee753a07b"
		},
		"f4242032-5ed9-4b47-84c2-e3e0d1693c5d": {
			"classDefinition": "com.sap.bpm.wfs.ui.SequenceFlowSymbol",
			"points": "507,116.5 624,116.5",
			"sourceSymbol": "a9651752-8436-4ea8-a540-309a9ba27d6e",
			"targetSymbol": "3a865d5d-7a2c-40f5-b813-007e3f869a05",
			"object": "e954f258-c46a-49ce-b199-30d99f6f8413"
		},
		"a8ee13ed-3858-41e5-885f-fc7a2fe7b02a": {
			"classDefinition": "com.sap.bpm.wfs.ui.ReferencedSubflowSymbol",
			"x": 707,
			"y": 86,
			"width": 100,
			"height": 60,
			"object": "145f9b20-42eb-477b-99d1-b8c76638e3bc"
		},
		"ee99e350-89e6-4f1c-b05b-58c54add988b": {
			"classDefinition": "com.sap.bpm.wfs.ui.SequenceFlowSymbol",
			"points": "757,116.5 884,116.5",
			"sourceSymbol": "a8ee13ed-3858-41e5-885f-fc7a2fe7b02a",
			"targetSymbol": "9388eb1e-4edf-4048-b304-3d9aa25a3714",
			"object": "0223402c-33d7-4849-bed1-f28b8d1ac65b"
		},
		"42ae982f-b982-47b7-b1df-c437af34e9b0": {
			"classDefinition": "com.sap.bpm.wfs.ui.ReferencedSubflowSymbol",
			"x": 960,
			"y": 86,
			"width": 100,
			"height": 60,
			"object": "54121eec-9eba-4aa8-aa2a-017b3fcef3b9"
		},
		"60f23aa1-a0e1-4227-8aa3-fab3670c0164": {
			"classDefinition": "com.sap.bpm.wfs.ui.SequenceFlowSymbol",
			"points": "1010,116.5 1136,116.5",
			"sourceSymbol": "42ae982f-b982-47b7-b1df-c437af34e9b0",
			"targetSymbol": "37aeeb29-3dec-4fbd-aac4-d571fd1f82da",
			"object": "02421d74-2d71-4607-a9b0-1754e58a0839"
		},
		"44c900a5-7f74-4800-8bee-d5c8a497d7a1": {
			"classDefinition": "com.sap.bpm.wfs.ui.ScriptTaskSymbol",
			"x": 207,
			"y": 86,
			"width": 100,
			"height": 60,
			"object": "967dedaa-de6a-4de5-9457-49dede0bd64d"
		},
		"5da78e6c-26b2-4cab-82a1-77f22706fed2": {
			"classDefinition": "com.sap.bpm.wfs.ui.SequenceFlowSymbol",
			"points": "257,114.5 379,114.5",
			"sourceSymbol": "44c900a5-7f74-4800-8bee-d5c8a497d7a1",
			"targetSymbol": "ad0ff6c0-377e-48b6-9ecc-8d06ccc0455f",
			"object": "a706edd4-9ad9-4b89-833c-88ff8e182609"
		},
		"0092b306-6302-46e9-beed-80df05cea5a6": {
			"classDefinition": "com.sap.bpm.wfs.ui.ScriptTaskSymbol",
			"x": 1203,
			"y": 86,
			"width": 100,
			"height": 60,
			"object": "3cfca574-9547-4d08-b490-1a3aa429dbc0"
		},
		"8fb69829-946a-413c-82a2-05bec13019ed": {
			"classDefinition": "com.sap.bpm.wfs.ui.SequenceFlowSymbol",
			"points": "1253,116 1401,116",
			"sourceSymbol": "0092b306-6302-46e9-beed-80df05cea5a6",
			"targetSymbol": "524c17fc-36fe-4f7f-b5c6-7823015e26a4",
			"object": "72f92db9-28a5-4c9f-a8fa-cad12938f1e4"
		},
		"3a865d5d-7a2c-40f5-b813-007e3f869a05": {
			"classDefinition": "com.sap.bpm.wfs.ui.ExclusiveGatewaySymbol",
			"x": 603,
			"y": 96,
			"object": "6b95937c-3f6d-4965-b9d8-de0b71cf4ac3"
		},
		"5a61d648-ed1e-4630-b859-e205caddbef8": {
			"classDefinition": "com.sap.bpm.wfs.ui.SequenceFlowSymbol",
			"points": "624,116.5 757,116.5",
			"sourceSymbol": "3a865d5d-7a2c-40f5-b813-007e3f869a05",
			"targetSymbol": "a8ee13ed-3858-41e5-885f-fc7a2fe7b02a",
			"object": "84926453-3034-40f1-a7ff-48ac1035fe83"
		},
		"9388eb1e-4edf-4048-b304-3d9aa25a3714": {
			"classDefinition": "com.sap.bpm.wfs.ui.ExclusiveGatewaySymbol",
			"x": 863,
			"y": 96,
			"object": "fb682bf4-d6b5-43fc-ae71-a7ebf6139fd7"
		},
		"5fbbb7a4-cd5a-4c1a-a5e7-bc768d88929e": {
			"classDefinition": "com.sap.bpm.wfs.ui.SequenceFlowSymbol",
			"points": "884,116.5 1010,116.5",
			"sourceSymbol": "9388eb1e-4edf-4048-b304-3d9aa25a3714",
			"targetSymbol": "42ae982f-b982-47b7-b1df-c437af34e9b0",
			"object": "bfa44f38-df70-467b-9b6c-114668c8f41f"
		},
		"37aeeb29-3dec-4fbd-aac4-d571fd1f82da": {
			"classDefinition": "com.sap.bpm.wfs.ui.ExclusiveGatewaySymbol",
			"x": 1115,
			"y": 96,
			"object": "bafc6d68-4619-4bfd-9216-cc273176ffe8"
		},
		"a8c1121d-bbad-4d6e-9b30-e004e0c227b2": {
			"classDefinition": "com.sap.bpm.wfs.ui.SequenceFlowSymbol",
			"points": "1136,116.5 1253,116.5",
			"sourceSymbol": "37aeeb29-3dec-4fbd-aac4-d571fd1f82da",
			"targetSymbol": "0092b306-6302-46e9-beed-80df05cea5a6",
			"object": "c2494e7e-ae60-4093-8527-706cf1878409"
		},
		"fb484d96-cf9c-4d04-977f-e9a14bd437ed": {
			"classDefinition": "com.sap.bpm.wfs.ui.SequenceFlowSymbol",
			"points": "624,117 624,-85 1137,-85 1137,117",
			"sourceSymbol": "3a865d5d-7a2c-40f5-b813-007e3f869a05",
			"targetSymbol": "37aeeb29-3dec-4fbd-aac4-d571fd1f82da",
			"object": "5b0f4025-5382-4340-839a-4eb43999d735"
		},
		"bdebd5c0-c5d7-4cf8-813e-25e22b3c1633": {
			"classDefinition": "com.sap.bpm.wfs.ui.SequenceFlowSymbol",
			"points": "884,117 884,-27 1137,-27 1137,108",
			"sourceSymbol": "9388eb1e-4edf-4048-b304-3d9aa25a3714",
			"targetSymbol": "37aeeb29-3dec-4fbd-aac4-d571fd1f82da",
			"object": "1808779b-88d1-4041-b173-80812860ff3c"
		},
		"ad0ff6c0-377e-48b6-9ecc-8d06ccc0455f": {
			"classDefinition": "com.sap.bpm.wfs.ui.ExclusiveGatewaySymbol",
			"x": 358,
			"y": 92,
			"object": "9cac6089-58f6-44ab-b595-4fe63b396b4b"
		},
		"f0760959-3e5e-47da-b250-42320462ea9a": {
			"classDefinition": "com.sap.bpm.wfs.ui.SequenceFlowSymbol",
			"points": "379,114.5 507,114.5",
			"sourceSymbol": "ad0ff6c0-377e-48b6-9ecc-8d06ccc0455f",
			"targetSymbol": "a9651752-8436-4ea8-a540-309a9ba27d6e",
			"object": "47136fc9-d24f-4f4c-b9b1-64b4b5123437"
		},
		"cdd9066c-1654-426c-89f1-19f86be488f9": {
			"classDefinition": "com.sap.bpm.wfs.ui.SequenceFlowSymbol",
			"points": "379,113 379,-138 1134,-138 1134,113",
			"sourceSymbol": "ad0ff6c0-377e-48b6-9ecc-8d06ccc0455f",
			"targetSymbol": "37aeeb29-3dec-4fbd-aac4-d571fd1f82da",
			"object": "6e8d72cc-0e98-4335-b51b-424d0e008262"
		},
		"524c17fc-36fe-4f7f-b5c6-7823015e26a4": {
			"classDefinition": "com.sap.bpm.wfs.ui.ServiceTaskSymbol",
			"x": 1351,
			"y": 86,
			"width": 100,
			"height": 60,
			"object": "59184350-a17f-4916-882c-fe79fc660946"
		},
		"8c1a6b9e-d22d-47b1-aab5-a981a24431a4": {
			"classDefinition": "com.sap.bpm.wfs.ui.SequenceFlowSymbol",
			"points": "1401,116 1540,116",
			"sourceSymbol": "524c17fc-36fe-4f7f-b5c6-7823015e26a4",
			"targetSymbol": "f79dc70b-d472-4093-b31d-0ada6933ab5b",
			"object": "37a577ac-fc2f-4ae5-91dc-79e0f08c2218"
		},
		"62d7f4ed-4063-4c44-af8b-39050bd44926": {
			"classDefinition": "com.sap.bpm.wfs.LastIDs",
			"sequenceflow": 18,
			"startevent": 1,
			"endevent": 1,
			"servicetask": 3,
			"scripttask": 2,
			"exclusivegateway": 4,
			"referencedsubflow": 3
		},
		"520e313a-89d5-4645-a061-85e7463985ec": {
			"classDefinition": "com.sap.bpm.wfs.ServiceTask",
			"destination": "kupit-flexiblewf-cap-srv_oauth",
			"destinationSource": "consumer",
			"path": "/catalog/sendMailRequester(hanaId=${context.hana_id})",
			"httpMethod": "GET",
			"responseVariable": "${context.emailFinalResult}",
			"id": "servicetask3",
			"name": "SendFinalEmail",
			"principalPropagationRef": "11a9b5ee-17c0-4159-9bbf-454dcfdcd5c3"
		},
		"f79dc70b-d472-4093-b31d-0ada6933ab5b": {
			"classDefinition": "com.sap.bpm.wfs.ui.ServiceTaskSymbol",
			"x": 1490,
			"y": 86,
			"width": 100,
			"height": 60,
			"object": "520e313a-89d5-4645-a061-85e7463985ec"
		},
		"d96a4760-9314-400c-9fb4-faf04b9667da": {
			"classDefinition": "com.sap.bpm.wfs.SequenceFlow",
			"id": "sequenceflow18",
			"name": "SequenceFlow18",
			"sourceRef": "520e313a-89d5-4645-a061-85e7463985ec",
			"targetRef": "2798f4e7-bc42-4fad-a248-159095a2f40a"
		},
		"c566f995-cf24-45cd-bbf8-2353257522df": {
			"classDefinition": "com.sap.bpm.wfs.ui.SequenceFlowSymbol",
			"points": "1540,116.25 1676.5,116.25",
			"sourceSymbol": "f79dc70b-d472-4093-b31d-0ada6933ab5b",
			"targetSymbol": "53e54950-7757-4161-82c9-afa7e86cff2c",
			"object": "d96a4760-9314-400c-9fb4-faf04b9667da"
		}
	}
}