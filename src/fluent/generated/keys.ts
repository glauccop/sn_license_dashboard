import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    'api-dashboard': {
                        table: 'sys_ws_definition'
                        id: '05e9728ef014453c878c15b8b431f613'
                    }
                    'api-dashboard-meta': {
                        table: 'sys_ws_operation'
                        id: '56a5f73376ed44a89bc12f141f177151'
                    }
                    'api-dashboard-suites': {
                        table: 'sys_ws_operation'
                        id: '4e00736524d64b2796fe768d20e56d49'
                    }
                    'api-dashboard-trend': {
                        table: 'sys_ws_operation'
                        id: 'b53c7936703c49f8bd89fcc7a0cc8d16'
                    }
                    'api-dashboard-v1': {
                        table: 'sys_ws_version'
                        id: '24f7e9214e554cb08ee24bb1ba43e85f'
                    }
                    bom_json: {
                        table: 'sys_module'
                        id: '406a6a3691a34b16bf05ce8de41a39f4'
                    }
                    'job-daily-collection': {
                        table: 'sysauto_script'
                        id: 'a7f4790dda3949f184029a7ff2ac7934'
                    }
                    'menu-license-allocation': {
                        table: 'sys_app_application'
                        id: 'bacda7d733474bbd9125c35a348a4fa2'
                    }
                    'module-dashboard': {
                        table: 'sys_app_module'
                        id: '316829f7d5fb4372a7b8ffd27f219ef8'
                    }
                    'module-entitlements': {
                        table: 'sys_app_module'
                        id: '1a861a487ae0446087f542a1aa093849'
                    }
                    'module-role-map': {
                        table: 'sys_app_module'
                        id: '4cf4c6d920fa4735b5776a7ba3b05234'
                    }
                    'module-snapshots': {
                        table: 'sys_app_module'
                        id: '5d8f91e2e10f4c8dab26dd83ebc1db0c'
                    }
                    'module-sources': {
                        table: 'sys_app_module'
                        id: '065f230f08664506b27708e7e1bb7b7b'
                    }
                    'module-suites': {
                        table: 'sys_app_module'
                        id: '3dcc28e21f3f43098906967f3b2e13b1'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: '46156092f97948138b9a74bb23784a6f'
                    }
                    'rm-itsm-change-manager': {
                        table: 'x_snc_lic_alloc_role_map'
                        id: '4f7e730326ad45098584f70cca05ca80'
                    }
                    'rm-itsm-incident-manager': {
                        table: 'x_snc_lic_alloc_role_map'
                        id: '1abb66609f96432c90ef9ec48e39f6e7'
                    }
                    'rm-itsm-itil': {
                        table: 'x_snc_lic_alloc_role_map'
                        id: '16cb12315bae4786ae084fa4ade99323'
                    }
                    'rm-itsm-major-incident-manager': {
                        table: 'x_snc_lic_alloc_role_map'
                        id: '051133e423ac4ba88acb0b8df9deee4a'
                    }
                    'rm-itsm-problem-coordinator': {
                        table: 'x_snc_lic_alloc_role_map'
                        id: '9d698e2c21154bdabbdadb848d91ddda'
                    }
                    'rm-itsm-problem-manager': {
                        table: 'x_snc_lic_alloc_role_map'
                        id: 'c49420b6f8df4451862b26c8efb593ed'
                    }
                    'rm-itsm-problem-task-analyst': {
                        table: 'x_snc_lic_alloc_role_map'
                        id: '6d6521cc13dc49c09a835f2841926805'
                    }
                    'rm-itsm-sn-change-read': {
                        table: 'x_snc_lic_alloc_role_map'
                        id: '1c4592ffb2f243389ea9e0d27205f521'
                    }
                    'rm-itsm-sn-change-write': {
                        table: 'x_snc_lic_alloc_role_map'
                        id: '04360af448234c278fc439bf073863ab'
                    }
                    'rm-itsm-sn-incident-read': {
                        table: 'x_snc_lic_alloc_role_map'
                        id: '3e6b9e1f4dae4f8a94857d0538ed210c'
                    }
                    'rm-itsm-sn-incident-write': {
                        table: 'x_snc_lic_alloc_role_map'
                        id: 'd7aa79519e51483884cbec5b2951e222'
                    }
                    'rm-itsm-sn-problem-read': {
                        table: 'x_snc_lic_alloc_role_map'
                        id: 'a7350d07cade40f8b0406c9aef673ebe'
                    }
                    'rm-itsm-sn-problem-write': {
                        table: 'x_snc_lic_alloc_role_map'
                        id: '24411e2294c64e54981bcd2c1461e074'
                    }
                    'rm-itsm-sn-request-read': {
                        table: 'x_snc_lic_alloc_role_map'
                        id: '23d1de33b55d4d88ac0f657b2d688450'
                    }
                    'rm-itsm-sn-request-write': {
                        table: 'x_snc_lic_alloc_role_map'
                        id: 'f5b6fcbc7c344addaac668d28e9de09d'
                    }
                    'rm-spm-demand-approver': {
                        table: 'x_snc_lic_alloc_role_map'
                        id: '27408fd5e4434b1d81a25073953f8045'
                    }
                    'rm-spm-demand-manager': {
                        table: 'x_snc_lic_alloc_role_map'
                        id: '8f0adaf264ea4875b7608e4033ade14b'
                    }
                    'rm-spm-demand-user': {
                        table: 'x_snc_lic_alloc_role_map'
                        id: '9b8bb07bf5a64b7d906f1d5fd10450e4'
                    }
                    'rm-spm-itfm-planner': {
                        table: 'x_snc_lic_alloc_role_map'
                        id: 'c1787116e5a94f8e8bfca7ba07fde4a0'
                    }
                    'rm-spm-portfolio-manager': {
                        table: 'x_snc_lic_alloc_role_map'
                        id: '399a963018b149dda8c83146b0979752'
                    }
                    'rm-spm-pps-admin': {
                        table: 'x_snc_lic_alloc_role_map'
                        id: 'c99d587459b0431291af75c3bcf8e91c'
                    }
                    'rm-spm-program-manager': {
                        table: 'x_snc_lic_alloc_role_map'
                        id: 'd3589267017444eab169d29a9b723b9a'
                    }
                    'rm-spm-project-manager': {
                        table: 'x_snc_lic_alloc_role_map'
                        id: 'b9619f612e824606b0afc64b60ba1cfb'
                    }
                    'rm-spm-project-portfolio-user': {
                        table: 'x_snc_lic_alloc_role_map'
                        id: '37abffe347264823a1995539d383a14c'
                    }
                    'rm-spm-project-user': {
                        table: 'x_snc_lic_alloc_role_map'
                        id: 'e5ff329c800b44799ac72e984cb89a1c'
                    }
                    'rm-spm-rate-model-admin': {
                        table: 'x_snc_lic_alloc_role_map'
                        id: 'd48b9ee0400f4177affa8cd762e7f088'
                    }
                    'rm-spm-rate-model-user': {
                        table: 'x_snc_lic_alloc_role_map'
                        id: 'b8c054083fa84d72b945db52baac7ebe'
                    }
                    'rm-spm-resource-manager': {
                        table: 'x_snc_lic_alloc_role_map'
                        id: '82871558c685476f89685d3f1b73f312'
                    }
                    'rm-spm-resource-user': {
                        table: 'x_snc_lic_alloc_role_map'
                        id: '5db649f4f276404aba3c88ed88a6c55b'
                    }
                    'rm-spm-sn-ppm-read': {
                        table: 'x_snc_lic_alloc_role_map'
                        id: '00926d38cc1542e9886eb9c78d8c7eeb'
                    }
                    'si-license-usage-collector': {
                        table: 'sys_script_include'
                        id: 'c2825060e41c472aad43a19359e93296'
                    }
                    'source-ham': {
                        table: 'x_snc_lic_alloc_source'
                        id: 'c601fb575a524242879145b65a00fede'
                    }
                    'source-itom-visibility': {
                        table: 'x_snc_lic_alloc_source'
                        id: '66869593c59447449503af23f288a603'
                    }
                    'source-rpa': {
                        table: 'x_snc_lic_alloc_source'
                        id: 'e4d3191a206d4f358e3e3b583cd90058'
                    }
                    'source-sam': {
                        table: 'x_snc_lic_alloc_source'
                        id: 'c2879099b9f5488b91c95010d1918e99'
                    }
                    'source-sir': {
                        table: 'x_snc_lic_alloc_source'
                        id: '821e8e0f3bf2433e9b71e8803aa29d0b'
                    }
                    'source-vr': {
                        table: 'x_snc_lic_alloc_source'
                        id: '9bba97879a714abab77fce459f2d4575'
                    }
                    src_server_handlers_dashboard_ts: {
                        table: 'sys_module'
                        id: 'c8a2637901a44c96aff084435d20212d'
                    }
                    src_server_LicenseUsageCollector_server_js: {
                        table: 'sys_module'
                        id: '24dca522b15f4cdcb37b22b456a22dae'
                    }
                    'suite-app-engine': {
                        table: 'x_snc_lic_alloc_suite'
                        id: '9aaaae008e7a4c01be3f64f110713d05'
                    }
                    'suite-ham': {
                        table: 'x_snc_lic_alloc_suite'
                        id: '71d4a541cb80421aa96c987c0b28caa0'
                    }
                    'suite-itom-visibility': {
                        table: 'x_snc_lic_alloc_suite'
                        id: '4efb2314bd7d46ba88064abf0403403d'
                    }
                    'suite-itsm': {
                        table: 'x_snc_lic_alloc_suite'
                        id: '34aee951b885485ea16898c44e893352'
                    }
                    'suite-rpa': {
                        table: 'x_snc_lic_alloc_suite'
                        id: '21fc91fe61ec41939d37697f97359b00'
                    }
                    'suite-sam': {
                        table: 'x_snc_lic_alloc_suite'
                        id: 'ac7450814b034de0bfc27c8ec70e6b9a'
                    }
                    'suite-sir': {
                        table: 'x_snc_lic_alloc_suite'
                        id: '04a193cd7b8943ba848a380ca1895644'
                    }
                    'suite-spm': {
                        table: 'x_snc_lic_alloc_suite'
                        id: '821bb16a1f7b4144ae570b16b4079dd0'
                    }
                    'suite-unrestricted': {
                        table: 'x_snc_lic_alloc_suite'
                        id: 'a109f121f4584b9a9d67e3810cc1bf87'
                    }
                    'suite-vr': {
                        table: 'x_snc_lic_alloc_suite'
                        id: '433dfda9a1174955a0c557b61ce356ca'
                    }
                }
                composite: [
                    {
                        table: 'sys_documentation'
                        id: '001bfa58030b4c2695352577bc0870ba'
                        key: {
                            name: 'x_snc_lic_alloc_source'
                            element: 'extra_filter'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '004fe7da48cc49d39cc2c6281575622b'
                        key: {
                            name: 'x_snc_lic_alloc_role_map'
                            element: 'source'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '046821741d0e46fdbc572329a3a995f9'
                        key: {
                            name: 'x_snc_lic_alloc_snapshot'
                            element: 'role_type'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '075f2354fdfd43b8bf8dcb5eb7a16b29'
                        key: {
                            name: 'x_snc_lic_alloc_snapshot'
                            element: 'suite'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0a17ddcdbd964bebbe28b981d88c6e65'
                        key: {
                            name: 'x_snc_lic_alloc_source'
                            element: 'label'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0ae8ab1e010a451b8e8bfe7a6a1c2919'
                        key: {
                            name: 'x_snc_lic_alloc_source'
                            element: 'source_table'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '119ebdee0abc4ac99b9f883560412988'
                        key: {
                            name: 'x_snc_lic_alloc_suite'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '11a1894e61f241c58fca8b4811a52261'
                        key: {
                            name: 'x_snc_lic_alloc_role_map'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '120004490174447ba1854a9d13d8a3ac'
                        key: {
                            name: 'x_snc_lic_alloc_snapshot'
                        }
                    },
                    {
                        table: 'sn_glider_source_artifact'
                        id: '130f8dd9f90f4210bbc130ab9dd7a016'
                        key: {
                            name: 'x_snc_lic_alloc_dashboard.do - BYOUI Files'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '13b9d90764534bc18288c2c8f3094022'
                        key: {
                            name: 'x_snc_lic_alloc_snapshot'
                            element: 'data_status'
                            value: 'table_missing'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '1773ce53092343d4a50c1a7ef20f470c'
                        key: {
                            name: 'x_snc_lic_alloc_suite'
                            element: 'unit'
                            value: 'unrestricted_user'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '181a2b3e02944314adeef643a4b78c79'
                        key: {
                            name: 'x_snc_lic_alloc_role_map'
                            element: 'role_type'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '19853d22d83045ddb7f756848e042a77'
                        key: {
                            name: 'x_snc_lic_alloc_suite'
                            element: 'unit'
                            value: 'not_countable'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '1b5fa2cb0857415985edbf2a8c162354'
                        key: {
                            name: 'x_snc_lic_alloc_entitlement'
                            element: 'active'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '1c6c20d70267414882dd31d4667d5571'
                        key: {
                            name: 'x_snc_lic_alloc_snapshot'
                            element: 'allocated_count'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '1d715c20cb3846f49999d14914c3d1d2'
                        key: {
                            name: 'x_snc_lic_alloc_suite'
                            element: 'unit'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '1e5e4267569e4e528fe928fa571f387f'
                        key: {
                            name: 'x_snc_lic_alloc_role_map'
                            element: 'role_type'
                            value: 'business_stakeholder'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '1e5e584394a2444391ebf05141c33445'
                        key: {
                            name: 'x_snc_lic_alloc_snapshot'
                            element: 'resource_count'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '1ed950a61b9840c9971bd59ae6692938'
                        key: {
                            name: 'x_snc_lic_alloc_snapshot'
                            element: 'error_message'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '21fe77841d80499c8e6f326dfb64d5d8'
                        key: {
                            name: 'x_snc_lic_alloc_suite'
                            element: 'unit'
                            value: 'unattended_robot'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '22bc6bcf80ed442c80a7357b9713c06c'
                        key: {
                            name: 'x_snc_lic_alloc_suite'
                            element: 'active'
                        }
                    },
                    {
                        table: 'sn_glider_source_artifact_m2m'
                        id: '24360913272b422a8838e7b5dee9fda3'
                        key: {
                            application_file: 'b2c3c1676e3e4f67a16fd3493dacecda'
                            source_artifact: '130f8dd9f90f4210bbc130ab9dd7a016'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '24ab022d96c04d3dbfbb5ea09f084820'
                        key: {
                            name: 'x_snc_lic_alloc_suite'
                            element: 'collection_enabled'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '24e4efaa52a64cd9b0ceac2cd37d20f1'
                        key: {
                            name: 'x_snc_lic_alloc_suite'
                            element: 'counting_method'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '25311fa79775437b85d8fa5cd2ef4675'
                        key: {
                            name: 'x_snc_lic_alloc_suite'
                            element: 'counting_method'
                            value: 'role_based'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '27e7f7b99ad040019d341120f785aaff'
                        key: {
                            name: 'x_snc_lic_alloc_source'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2a880d071d804e66b4426c3c96e643bf'
                        key: {
                            name: 'x_snc_lic_alloc_source'
                            element: 'suite'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '2ac5931f5999489c956d21c69f00a8a8'
                        key: {
                            name: 'x_snc_lic_alloc_role_map'
                            element: 'source'
                            value: 'default'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2b65f66c741c42a9a84f29c3d3af351d'
                        key: {
                            name: 'x_snc_lic_alloc_source'
                            element: 'date_field'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '2bc55d7bb43c4fbdb1a305d7402b6637'
                        key: {
                            name: 'x_snc_lic_alloc_snapshot'
                            element: 'category'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2c815c9d07b3413faa9ffc223b030420'
                        key: {
                            name: 'x_snc_lic_alloc_suite'
                            element: 'methodology'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2d32a800312547d08e979844a47052cb'
                        key: {
                            name: 'x_snc_lic_alloc_suite'
                            element: 'name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '2f19240564ca40a1acd0ee7697f3f84b'
                        key: {
                            name: 'x_snc_lic_alloc_role_map'
                            element: 'source'
                            value: 'manual'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ux_lib_asset'
                        id: '2f1f24d137b74b1cbb5d52eabedcd365'
                        key: {
                            name: 'x_snc_lic_alloc/main.js.map'
                        }
                    },
                    {
                        table: 'sys_ux_lib_asset'
                        id: '2fb2adc3c03242149d91b9c25412a92f'
                        key: {
                            name: 'x_snc_lic_alloc/vendor-react-dom--e7587a3c.js.map'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '304011619a3e496e89ef6c37f285a085'
                        key: {
                            name: 'x_snc_lic_alloc_entitlement'
                            element: 'product_name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '30fe04b099604697b515c31eba4344cc'
                        key: {
                            name: 'x_snc_lic_alloc_entitlement'
                            element: 'product_name'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '31d8404a54f4416394e1dccb7180e663'
                        key: {
                            name: 'x_snc_lic_alloc_entitlement'
                            element: 'source_instance'
                        }
                    },
                    {
                        table: 'sn_glider_source_artifact_m2m'
                        id: '3255c87e3af74a14830c6240ed304c67'
                        deleted: true
                        key: {
                            application_file: 'e8bfe5b5b86741a885d778d5a1f27d2e'
                            source_artifact: '815bfbb04baf4957a62895c9764eb753'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '346fb3a720ad427eb3852bc098170b80'
                        key: {
                            name: 'x_snc_lic_alloc_source'
                            element: 'entitled_field'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '3487511d3878441db58aef512c0ffc74'
                        key: {
                            name: 'x_snc_lic_alloc_source'
                            element: 'value_basis'
                            value: 'resource_count'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '39b07ea22d1b4001b32cef7924cee69a'
                        key: {
                            name: 'x_snc_lic_alloc_suite'
                            element: 'unit'
                            value: 'device'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '3a8e0a46d262405dbe1d8dc9bb0488b2'
                        key: {
                            name: 'x_snc_lic_alloc_role_map'
                            element: 'role_type'
                            value: 'fulfiller'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '3be55689052c479cb1fa98847d7e39fd'
                        key: {
                            name: 'x_snc_lic_alloc_role_map'
                            element: 'application_label'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '3d1a50ef13af4777b6c8c6a339556333'
                        key: {
                            name: 'x_snc_lic_alloc_entitlement'
                            element: 'sku_unit'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '3d2f897375a44e1583dea47f788d4b5e'
                        key: {
                            name: 'x_snc_lic_alloc_snapshot'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '41fbe0eed1d44c3abe32f2a3bb041bc4'
                        key: {
                            name: 'x_snc_lic_alloc_entitlement'
                            element: 'prod_code'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '43372a2adf9b449589bfb4cda2e9f9a5'
                        key: {
                            name: 'x_snc_lic_alloc_source'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '4624cc21fed54dc48cfa333205e14579'
                        key: {
                            name: 'x_snc_lic_alloc_suite'
                            element: 'unit'
                            value: 'subscription_unit'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4646d6825c3d434785ca0562677c53ff'
                        key: {
                            name: 'x_snc_lic_alloc_snapshot'
                            element: 'source_job_status'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '46f3628d99cc4a6095fd3005452fb856'
                        key: {
                            name: 'x_snc_lic_alloc_source'
                            element: 'product_field'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '49643bbc6a1e4baaa71b818da18ec0d7'
                        key: {
                            name: 'x_snc_lic_alloc_suite'
                            element: 'counting_method'
                            value: 'not_measurable'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '4b812d09aed84830a223793358a4eab1'
                        key: {
                            name: 'x_snc_lic_alloc_source'
                            element: 'suite'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '5149dd5c0fce4f46b6f3d9b61f7a5ab5'
                        key: {
                            name: 'x_snc_lic_alloc_suite'
                            element: 'counting_method'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '54df685a8b114b099cb9cb8b28860be0'
                        key: {
                            name: 'x_snc_lic_alloc_snapshot'
                            element: 'data_status'
                            value: 'not_measurable'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '56b8c8495ca249f0b3b89b838a33865b'
                        key: {
                            name: 'x_snc_lic_alloc_source'
                            element: 'product_field'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '57867004b86d4c0e8f19ca952c54aec7'
                        key: {
                            name: 'x_snc_lic_alloc_source'
                            element: 'product_value'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '59072cb869a84ddc9bbf5d2f34e94ffa'
                        key: {
                            name: 'x_snc_lic_alloc_snapshot'
                            element: 'su_count'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '5921af1587d14b83887b3d447af99d55'
                        key: {
                            name: 'x_snc_lic_alloc_suite'
                            element: 'unit'
                            value: 'user'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '5b09e82c614c4d0986c9d13c053128c8'
                        key: {
                            name: 'x_snc_lic_alloc_role_map'
                            element: 'application_label'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '5c348f80461a490f84bcc14b436d907e'
                        key: {
                            name: 'x_snc_lic_alloc_suite'
                            element: 'display_order'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '5f154ee524314d0280a77dbbcd93855d'
                        key: {
                            name: 'x_snc_lic_alloc_suite'
                            element: 'counting_method'
                            value: 'native_counts'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '6096d1db1ef34b1b851c64e9fccf3711'
                        key: {
                            name: 'x_snc_lic_alloc_snapshot'
                            element: 'role_type'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '6224526b1f3a4d63864fee5dcd0bc97b'
                        key: {
                            name: 'x_snc_lic_alloc_snapshot'
                            element: 'snapshot_date'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '622f33f930034e7dbc4283b996b5a462'
                        key: {
                            name: 'x_snc_lic_alloc_suite'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '62b0f7487a8640c1aa61e984e527fa7b'
                        key: {
                            name: 'x_snc_lic_alloc_source'
                            element: 'date_field'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '639660de066040b993cd8da1ec93b54e'
                        key: {
                            name: 'x_snc_lic_alloc_source'
                            element: 'ratio_field'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '687853ec935f4c28bdcd9ec407abd0cd'
                        key: {
                            name: 'x_snc_lic_alloc_source'
                            element: 'value_basis'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '68d28b2fc1574294a189061c70523ff1'
                        key: {
                            name: 'x_snc_lic_alloc_snapshot'
                            element: 'source_job_status'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '692934541fa74f9b8dd6aef77947022a'
                        key: {
                            name: 'x_snc_lic_alloc_role_map'
                            element: 'active'
                        }
                    },
                    {
                        table: 'sys_index'
                        id: '72c0452792a24865ab60ff86d1c5fba5'
                        key: {
                            logical_table_name: 'x_snc_lic_alloc_suite'
                            col_name_string: 'code'
                        }
                    },
                    {
                        table: 'sys_ux_lib_asset'
                        id: '72e6e0a72061462fa5fb8f46322b44bd'
                        key: {
                            name: 'x_snc_lic_alloc/vendor-react-dom--e7587a3c'
                        }
                    },
                    {
                        table: 'sys_ui_page'
                        id: '730255b8394d42b2b0495ca4035b2655'
                        deleted: true
                        key: {
                            endpoint: 'x_snc_lic_alloc_incident_manager.do'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '75985a693f4b423ab1bd2cbcbe37e98e'
                        key: {
                            name: 'x_snc_lic_alloc_source'
                            element: 'active'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '75d11e4493394cd8ba2a9d36ee355252'
                        key: {
                            name: 'x_snc_lic_alloc_source'
                            element: 'extra_filter'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '76e0c343384f4a7f9d6f1200969274e2'
                        key: {
                            name: 'x_snc_lic_alloc_suite'
                            element: 'unit'
                            value: 'fulfiller_user'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '77abe350d2c04849a4302cb85332d2c5'
                        key: {
                            name: 'x_snc_lic_alloc_entitlement'
                            element: 'active'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sn_glider_source_artifact_m2m'
                        id: '7905126e85a041af8dd54bf7cb3e2278'
                        deleted: true
                        key: {
                            application_file: '2f1f24d137b74b1cbb5d52eabedcd365'
                            source_artifact: '815bfbb04baf4957a62895c9764eb753'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7b0492de772649f68c46cd066b360af7'
                        key: {
                            name: 'x_snc_lic_alloc_source'
                            element: 'status_field'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7bd68d97d0a24811b1cc5347ddd67de9'
                        key: {
                            name: 'x_snc_lic_alloc_snapshot'
                            element: 'su_ratio'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7d527a2d5ffa4921a45dfb5778c85824'
                        key: {
                            name: 'x_snc_lic_alloc_suite'
                            element: 'code'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_index'
                        id: '7dbe203429a245ffbca7c0abb3c0d071'
                        key: {
                            logical_table_name: 'x_snc_lic_alloc_snapshot'
                            col_name_string: 'suite,snapshot_date'
                        }
                    },
                    {
                        table: 'sn_glider_source_artifact'
                        id: '815bfbb04baf4957a62895c9764eb753'
                        deleted: true
                        key: {
                            name: 'x_snc_lic_alloc_incident_manager.do - BYOUI Files'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '8316c672de76412eac525a97859dbbd4'
                        key: {
                            name: 'x_snc_lic_alloc_role_map'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '846ddb6ae35a4e1eb68b68429db882d0'
                        key: {
                            name: 'x_snc_lic_alloc_source'
                        }
                    },
                    {
                        table: 'sn_glider_source_artifact_m2m'
                        id: '86bded03afe043feb5d2eee4268c5d6d'
                        deleted: true
                        key: {
                            application_file: '72e6e0a72061462fa5fb8f46322b44bd'
                            source_artifact: '815bfbb04baf4957a62895c9764eb753'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '87e10da825084d1ca580233f61ff1b6c'
                        key: {
                            name: 'x_snc_lic_alloc_snapshot'
                            element: 'data_status'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '88c5066e9bdd4dad8a3184fa2f67e3ff'
                        key: {
                            name: 'x_snc_lic_alloc_role_map'
                            element: 'role_type'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '892fea93933a4750b73cc1e7b6e2f530'
                        key: {
                            name: 'x_snc_lic_alloc_snapshot'
                            element: 'entitled'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '8ac47fc6b2e84fc79234b39647ac2eeb'
                        key: {
                            name: 'x_snc_lic_alloc_suite'
                            element: 'collection_enabled'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '8be911fb22004705b53add3c89eeb125'
                        key: {
                            name: 'x_snc_lic_alloc_snapshot'
                            element: 'entitled'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '8cd9bac430b24119b111bfdb2953b8fe'
                        key: {
                            name: 'x_snc_lic_alloc_role_map'
                            element: 'role_type'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '8d52ff83ffa04581968a0f5dd0e86db0'
                        key: {
                            name: 'x_snc_lic_alloc_snapshot'
                            element: 'data_status'
                            value: 'ok'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '91dcc45e5faf461b9a443c1c14616a83'
                        key: {
                            name: 'x_snc_lic_alloc_snapshot'
                            element: 'su_count'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '93e9d3fa370444849d6f7aa37ab231cc'
                        key: {
                            name: 'x_snc_lic_alloc_snapshot'
                            element: 'allocated_count'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '942806de2ac84b1892964e44faaf2974'
                        key: {
                            name: 'x_snc_lic_alloc_suite'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '94c8e7f6e2f34f97999c5302df179600'
                        key: {
                            name: 'x_snc_lic_alloc_entitlement'
                            element: 'contract_quantity'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '9518e0e91fff4adeb18dcac1d2377290'
                        key: {
                            name: 'x_snc_lic_alloc_entitlement'
                            element: 'suite'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '98b7a04ff373405aa5ea7c7039f5bd07'
                        key: {
                            name: 'x_snc_lic_alloc_source'
                            element: 'su_field'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '995af89ebbfa48c8b3496f61fcb14f03'
                        key: {
                            name: 'x_snc_lic_alloc_snapshot'
                            element: 'resource_count'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '9961b682d0124a829202a74511898f21'
                        key: {
                            name: 'x_snc_lic_alloc_snapshot'
                            element: 'snapshot_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sn_glider_source_artifact_m2m'
                        id: '9982949ff69d4eeea399dc1c02956237'
                        key: {
                            application_file: '72e6e0a72061462fa5fb8f46322b44bd'
                            source_artifact: '130f8dd9f90f4210bbc130ab9dd7a016'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '99c2e908dbee460bb979ee08b2554d82'
                        key: {
                            name: 'x_snc_lic_alloc_role_map'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '99ce6f3acdef47ceaef108df84bcb24e'
                        key: {
                            name: 'x_snc_lic_alloc_entitlement'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '9eb152c2bde94fb8ba92bd5020f53785'
                        key: {
                            name: 'x_snc_lic_alloc_role_map'
                            element: 'active'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '9f08add62afe4ef0852bf2447a313ed8'
                        key: {
                            name: 'x_snc_lic_alloc_role_map'
                            element: 'role'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a3b73db447cd406c8cd105db94c50e42'
                        key: {
                            name: 'x_snc_lic_alloc_snapshot'
                            element: 'su_ratio'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a3c2c39e3c004cc89704138918fa5dea'
                        key: {
                            name: 'x_snc_lic_alloc_suite'
                            element: 'unit'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a5f0476bf0374ea8a91c88f4aafa15dd'
                        key: {
                            name: 'x_snc_lic_alloc_entitlement'
                            element: 'source_instance'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sn_glider_source_artifact_m2m'
                        id: 'a7e1a738fbb94c91b066257949d38fe4'
                        key: {
                            application_file: '2fb2adc3c03242149d91b9c25412a92f'
                            source_artifact: '130f8dd9f90f4210bbc130ab9dd7a016'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a8597755afd64fe78035ee68d61f7040'
                        key: {
                            name: 'x_snc_lic_alloc_suite'
                            element: 'display_order'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a93da68c5c0249c58bfebc65f9275b93'
                        key: {
                            name: 'x_snc_lic_alloc_suite'
                            element: 'counting_method'
                            value: 'unrestricted'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'aab924568f2144928f2cdbbc11a279b3'
                        key: {
                            name: 'x_snc_lic_alloc_snapshot'
                            element: 'active_365_count'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'aacb2ddb936e4d6b94d1698373c768a0'
                        key: {
                            name: 'x_snc_lic_alloc_source'
                            element: 'entitled_field'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ab1e5b351e0f48219b3a0ad1cb786b67'
                        key: {
                            name: 'x_snc_lic_alloc_entitlement'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b1796573b76245a6a30838c687cb3a07'
                        key: {
                            name: 'x_snc_lic_alloc_suite'
                            element: 'active'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'b240d3a6610342608104324c41e305ea'
                        key: {
                            name: 'x_snc_lic_alloc_source'
                            element: 'value_basis'
                        }
                    },
                    {
                        table: 'sys_ui_page'
                        id: 'b2c3c1676e3e4f67a16fd3493dacecda'
                        key: {
                            endpoint: 'x_snc_lic_alloc_dashboard.do'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b376d3fac6e9432a8e889e78694086d6'
                        key: {
                            name: 'x_snc_lic_alloc_suite'
                            element: 'name'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'b3a217a18aa540afb57503c0f8c7b806'
                        key: {
                            name: 'x_snc_lic_alloc_snapshot'
                            element: 'data_status'
                            value: 'error'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b3df34caa36b4ce68f381368bc60a457'
                        key: {
                            name: 'x_snc_lic_alloc_suite'
                            element: 'methodology'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b4459254fdbb4572b9d61fd129b6d265'
                        key: {
                            name: 'x_snc_lic_alloc_entitlement'
                            element: 'contract_quantity'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b49006bdb1f94c0a8d1c352ce246fd65'
                        key: {
                            name: 'x_snc_lic_alloc_suite'
                            element: 'unit'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b60c4765ff134fcf83c6c30d36f22978'
                        key: {
                            name: 'x_snc_lic_alloc_snapshot'
                            element: 'error_message'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b7008442319e46c59fed00680e5c9288'
                        key: {
                            name: 'x_snc_lic_alloc_snapshot'
                            element: 'suite'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'bae19b57c74046b1beab04712451c7c4'
                        key: {
                            name: 'x_snc_lic_alloc_source'
                            element: 'product_value'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'bd07d2dd47dc4383a43b316056caa42f'
                        key: {
                            name: 'x_snc_lic_alloc_source'
                            element: 'label'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'bf6de06623984aef89343c723f744bd9'
                        key: {
                            name: 'x_snc_lic_alloc_entitlement'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'bfcafc5e7a574738b7e1cd27d1f592b3'
                        key: {
                            name: 'x_snc_lic_alloc_role_map'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'bff8fa07d5494abda8fcdc84f2c01f7a'
                        key: {
                            name: 'x_snc_lic_alloc_source'
                            element: 'value_basis'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'bffca3cda27c44adacf7f0b2c8b8bc66'
                        key: {
                            name: 'x_snc_lic_alloc_suite'
                            element: 'code'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'c0ebdb53ea464f55b18f39ecbb763754'
                        key: {
                            name: 'x_snc_lic_alloc_role_map'
                            element: 'source'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c4aadb583e444b38bad722bffa8d3f1b'
                        key: {
                            name: 'x_snc_lic_alloc_source'
                            element: 'su_field'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c571e45dbecb45249ab6e5a4d7fd9ca3'
                        key: {
                            name: 'x_snc_lic_alloc_source'
                            element: 'status_field'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c574f66be5b749d9acb875bac774c611'
                        key: {
                            name: 'x_snc_lic_alloc_entitlement'
                            element: 'sku_unit'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c6095d3c8d28412ea8afb69954220021'
                        key: {
                            name: 'x_snc_lic_alloc_source'
                            element: 'count_field'
                        }
                    },
                    {
                        table: 'sn_glider_source_artifact_m2m'
                        id: 'c77a06ea9c1d481cb3d9bb703cf086be'
                        deleted: true
                        key: {
                            application_file: '2fb2adc3c03242149d91b9c25412a92f'
                            source_artifact: '815bfbb04baf4957a62895c9764eb753'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c82066112f3e44ae93c59196cbcf3c08'
                        key: {
                            name: 'x_snc_lic_alloc_source'
                            element: 'category_field'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c8fc5028c89c4064927fd22924a01b40'
                        key: {
                            name: 'x_snc_lic_alloc_source'
                            element: 'count_field'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'cd5d17bdf3404c858bbc2c37a292c708'
                        key: {
                            name: 'x_snc_lic_alloc_snapshot'
                            element: 'active_365_count'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'cd680083592f4e8b9903137f2f664329'
                        key: {
                            name: 'x_snc_lic_alloc_source'
                            element: 'source_table'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'cdcff65bf1ff4f88afe3236153019b71'
                        key: {
                            name: 'x_snc_lic_alloc_role_map'
                            element: 'suite'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ce8be581f826452bac5ae05b594e409e'
                        key: {
                            name: 'x_snc_lic_alloc_snapshot'
                            element: 'category'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd2f5ba6004ef46b688e28cb5115b4ed3'
                        key: {
                            name: 'x_snc_lic_alloc_source'
                            element: 'ratio_field'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd5e2352dd5b14c359370adf7aeafe356'
                        key: {
                            name: 'x_snc_lic_alloc_snapshot'
                            element: 'data_status'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd7d0bcfa2fb74db1b6c0ed8f059c36ec'
                        key: {
                            name: 'x_snc_lic_alloc_source'
                            element: 'active'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'da93bee86f2d42368f88ca1f71261d42'
                        key: {
                            name: 'x_snc_lic_alloc_entitlement'
                            element: 'prod_code'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'db73968cec024536a053205b4b24234d'
                        key: {
                            name: 'x_snc_lic_alloc_source'
                            element: 'value_basis'
                            value: 'subscription_units'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sn_glider_source_artifact_m2m'
                        id: 'de1fab70f1ab463f8242669e10f164ae'
                        deleted: true
                        key: {
                            application_file: '730255b8394d42b2b0495ca4035b2655'
                            source_artifact: '815bfbb04baf4957a62895c9764eb753'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'df2cde17045147bc91aea67f45bb4b63'
                        key: {
                            name: 'x_snc_lic_alloc_snapshot'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e270e5ac364e410896f384523eddf968'
                        key: {
                            name: 'x_snc_lic_alloc_suite'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: 'e2887bf4ba73448cb5fe7839dcaf0f67'
                        key: {
                            name: 'x_snc_lic_alloc.viewer'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'e3797a2e3dd6469c85654d34e4317323'
                        key: {
                            name: 'x_snc_lic_alloc_snapshot'
                            element: 'data_status'
                            value: 'no_data'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sn_glider_source_artifact_m2m'
                        id: 'e440f2670f3d4fef938f5f4464ddf19a'
                        key: {
                            application_file: '2f1f24d137b74b1cbb5d52eabedcd365'
                            source_artifact: '130f8dd9f90f4210bbc130ab9dd7a016'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'e49349dbb6e8450e9b61c2feefda634b'
                        key: {
                            name: 'x_snc_lic_alloc_snapshot'
                        }
                    },
                    {
                        table: 'sys_ux_lib_asset'
                        id: 'e8bfe5b5b86741a885d778d5a1f27d2e'
                        key: {
                            name: 'x_snc_lic_alloc/main'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ebe88092fb3b416e91929d253d3257e2'
                        key: {
                            name: 'x_snc_lic_alloc_entitlement'
                            element: 'suite'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ed24dc0861014a6088b1667553ff09f3'
                        key: {
                            name: 'x_snc_lic_alloc_suite'
                            element: 'counting_method'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ed9b7a982ff04e3896721e9b38d08abb'
                        key: {
                            name: 'x_snc_lic_alloc_role_map'
                            element: 'role'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f122d7a39d204202a1e3822191f1303f'
                        key: {
                            name: 'x_snc_lic_alloc_role_map'
                            element: 'source'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f468c3f1c6024b18bea1395ca9e5dc5e'
                        key: {
                            name: 'x_snc_lic_alloc_snapshot'
                            element: 'data_status'
                        }
                    },
                    {
                        table: 'sn_glider_source_artifact_m2m'
                        id: 'f524b3454a7d4597971d0db3fcf592b7'
                        key: {
                            application_file: 'e8bfe5b5b86741a885d778d5a1f27d2e'
                            source_artifact: '130f8dd9f90f4210bbc130ab9dd7a016'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f694914567984943ac8c39674dec5dc8'
                        key: {
                            name: 'x_snc_lic_alloc_role_map'
                            element: 'suite'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: 'f88a4bb640eb4406aa1acdb602297ad3'
                        key: {
                            name: 'x_snc_lic_alloc.admin'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'f9596b5d5112454fbf2ce9e899f0e28c'
                        key: {
                            name: 'x_snc_lic_alloc_entitlement'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'fbcc7db9abbc4126856813dbe16a36e1'
                        key: {
                            name: 'x_snc_lic_alloc_source'
                            element: 'category_field'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ff1874908b384fde86d259e9c6ce4217'
                        key: {
                            name: 'x_snc_lic_alloc_source'
                            element: 'NULL'
                        }
                    },
                ]
            }
        }
    }
}
