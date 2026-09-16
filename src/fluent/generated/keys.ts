import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    'acl-dashboard-rest': {
                        table: 'sys_security_acl'
                        id: '444686fb744346b08455db1b52eaa6af'
                    }
                    'acl-entitlement-create': {
                        table: 'sys_security_acl'
                        id: 'c89ac3dfb6434a12b351cd913d30f2eb'
                    }
                    'acl-entitlement-delete': {
                        table: 'sys_security_acl'
                        id: 'ff35f10787134c838daeb8182823898b'
                    }
                    'acl-entitlement-read': {
                        table: 'sys_security_acl'
                        id: '958724ee3d724c77916bf49e28d4b7fa'
                    }
                    'acl-entitlement-write': {
                        table: 'sys_security_acl'
                        id: '4147c5b221a74b3e9c071127c7f848f5'
                    }
                    'acl-role-map-create': {
                        table: 'sys_security_acl'
                        id: '381fd40d340049558135b007101df183'
                    }
                    'acl-role-map-delete': {
                        table: 'sys_security_acl'
                        id: '1c591e240ddf411d90c891364c5fea40'
                    }
                    'acl-role-map-read': {
                        table: 'sys_security_acl'
                        id: 'c7f315fd46e74a2c9baecc2eaf754eaf'
                    }
                    'acl-role-map-write': {
                        table: 'sys_security_acl'
                        id: '2a8c6cd48bab4c7faae7d4cf86a1978e'
                    }
                    'acl-snapshot-create': {
                        table: 'sys_security_acl'
                        id: '048871ee2dff4b6ca2bd6eab56bade76'
                    }
                    'acl-snapshot-delete': {
                        table: 'sys_security_acl'
                        id: '5eed1d0d28d14410a72a8e8e0e901ff7'
                    }
                    'acl-snapshot-read': {
                        table: 'sys_security_acl'
                        id: '94a5dd1fead342ff85340e7992666eae'
                    }
                    'acl-snapshot-write': {
                        table: 'sys_security_acl'
                        id: '068a4dac5d324600962a9964a1482418'
                    }
                    'acl-source-create': {
                        table: 'sys_security_acl'
                        id: '22f5a3865a254da58893df179d62f891'
                    }
                    'acl-source-delete': {
                        table: 'sys_security_acl'
                        id: 'f9f137d926db4c9e98850489c52ef90d'
                    }
                    'acl-source-read': {
                        table: 'sys_security_acl'
                        id: 'a4073d2e6fd246ae8725b3069c1207bc'
                    }
                    'acl-source-write': {
                        table: 'sys_security_acl'
                        id: '1fef8d9bd4d24397b92f14003c53c23b'
                    }
                    'acl-suite-create': {
                        table: 'sys_security_acl'
                        id: 'ee0352b76a424108a20b485dadfe27d9'
                    }
                    'acl-suite-delete': {
                        table: 'sys_security_acl'
                        id: '470bf52ec9d14eb0b75cd90f12fc89e7'
                    }
                    'acl-suite-read': {
                        table: 'sys_security_acl'
                        id: '2c1fc2d68e7145739ec8f62002e457e6'
                    }
                    'acl-suite-write': {
                        table: 'sys_security_acl'
                        id: '93495945f6bf480d9c6b3eadaecd6e1d'
                    }
                    'api-dashboard': {
                        table: 'sys_ws_definition'
                        id: '05e9728ef014453c878c15b8b431f613'
                    }
                    'api-dashboard-meta': {
                        table: 'sys_ws_operation'
                        id: '56a5f73376ed44a89bc12f141f177151'
                    }
                    'api-dashboard-roles': {
                        table: 'sys_ws_operation'
                        id: 'd30cde43ab6d4c25afa7398eb109c8c8'
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
                    'api-dashboard-visibility': {
                        table: 'sys_ws_operation'
                        id: 'e568cfdb984d407780540cff88544ac7'
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
                    'privilege-now-assist-analytics-read': {
                        table: 'sys_scope_privilege'
                        id: '67d4f6d916234cf39b9f194c2aa0d3aa'
                    }
                    'property-pb-dictionary-seeded': {
                        table: 'sys_properties'
                        id: 'bfda9f828b3544cab6466eb26fd71151'
                        deleted: true
                    }
                    'property-theme-accent': {
                        table: 'sys_properties'
                        id: 'dfdaa90172084d268b25da6283ebb8d0'
                    }
                    'property-theme-primary': {
                        table: 'sys_properties'
                        id: 'b3ad2ce052b34f9e9359deb3f6b40d62'
                    }
                    'rm-csm-agent': {
                        table: 'x_snc_lic_alloc_role_map'
                        id: 'c8805e96f8e94371a448c1a83dfee854'
                    }
                    'rm-csm-case-admin': {
                        table: 'x_snc_lic_alloc_role_map'
                        id: '207cb29fea0f43528f2e431a536bc471'
                    }
                    'rm-csm-case-contributor-viewer': {
                        table: 'x_snc_lic_alloc_role_map'
                        id: '011bd875da1c4aee97a3e3e2f015ddfa'
                    }
                    'rm-csm-case-read-granular': {
                        table: 'x_snc_lic_alloc_role_map'
                        id: '1f4bad4514c24aceace6819111f6a69f'
                    }
                    'rm-csm-case-task-agent': {
                        table: 'x_snc_lic_alloc_role_map'
                        id: '82318208e848448ead987c7bb3b44127'
                    }
                    'rm-csm-case-viewer': {
                        table: 'x_snc_lic_alloc_role_map'
                        id: '91f408ecc2c5474489ccc320ad2f871d'
                    }
                    'rm-csm-contact-manager': {
                        table: 'x_snc_lic_alloc_role_map'
                        id: '02f9c139c401480a9968cf4f92d0c499'
                    }
                    'rm-csm-manager': {
                        table: 'x_snc_lic_alloc_role_map'
                        id: '08f76c7ac99c4e92a68732e905d74b01'
                    }
                    'rm-csm-relationship-agent': {
                        table: 'x_snc_lic_alloc_role_map'
                        id: 'dd6a882aa1c24a00bc4adbd1f432db4b'
                    }
                    'rm-csm-requester': {
                        table: 'x_snc_lic_alloc_role_map'
                        id: '013e76f099f24620b7d13ff083fa7a3b'
                    }
                    'rm-csm-svc-location-agent': {
                        table: 'x_snc_lic_alloc_role_map'
                        id: 'cb77d4fee2c24b0b8b08451265506ee9'
                    }
                    'rm-csm-svc-location-manager': {
                        table: 'x_snc_lic_alloc_role_map'
                        id: '12182140ae334e8f98aefe38313d445c'
                    }
                    'rm-fsm-capacity-read': {
                        table: 'x_snc_lic_alloc_role_map'
                        id: '145bc0cfb69744f8b9e1111b4e2f2346'
                    }
                    'rm-fsm-capacity-write': {
                        table: 'x_snc_lic_alloc_role_map'
                        id: '9f3df38aeac24717991937fc26e28900'
                    }
                    'rm-fsm-planned-work-admin': {
                        table: 'x_snc_lic_alloc_role_map'
                        id: '4d175f8886c348c381a7268801a9210f'
                    }
                    'rm-fsm-planned-work-read': {
                        table: 'x_snc_lic_alloc_role_map'
                        id: '741640929868404fac87e52999011c0a'
                    }
                    'rm-fsm-quality-agent': {
                        table: 'x_snc_lic_alloc_role_map'
                        id: 'a7adce3934aa410a9f734988d45ebff6'
                    }
                    'rm-fsm-service-location-write': {
                        table: 'x_snc_lic_alloc_role_map'
                        id: '2c39630f8867428f917ec42ca3d7ef39'
                    }
                    'rm-fsm-servicedesk-agent': {
                        table: 'x_snc_lic_alloc_role_map'
                        id: '62ca859ad81f4f1baa494095086ec542'
                    }
                    'rm-fsm-technician-sales-write': {
                        table: 'x_snc_lic_alloc_role_map'
                        id: '1ba6252f084648019899279933f900d2'
                    }
                    'rm-fsm-territory-manager': {
                        table: 'x_snc_lic_alloc_role_map'
                        id: 'db9f16f8fa75490a9f685f7d21b957fc'
                    }
                    'rm-fsm-territory-planner': {
                        table: 'x_snc_lic_alloc_role_map'
                        id: '45121cc3170d4617b7375dc6149e5e2e'
                    }
                    'rm-fsm-territory-read': {
                        table: 'x_snc_lic_alloc_role_map'
                        id: '2ef7617805fa4870af7be4b225ebcf18'
                    }
                    'rm-fsm-wm-admin': {
                        table: 'x_snc_lic_alloc_role_map'
                        id: 'b216c3eea9254dcdbb925cdee00ec2a2'
                    }
                    'rm-fsm-wm-agent': {
                        table: 'x_snc_lic_alloc_role_map'
                        id: '6ae110d526b041f4856d53822bc87525'
                    }
                    'rm-fsm-wm-approver': {
                        table: 'x_snc_lic_alloc_role_map'
                        id: '82130161c75c47e4bb8cc2c1ca576b7d'
                    }
                    'rm-fsm-wm-basic': {
                        table: 'x_snc_lic_alloc_role_map'
                        id: 'a5f8cc9281774072af54ce999e09ee1a'
                    }
                    'rm-fsm-wm-crew-moderator': {
                        table: 'x_snc_lic_alloc_role_map'
                        id: '382e989860584d79b33ecf6734d940d7'
                    }
                    'rm-fsm-wm-dispatcher': {
                        table: 'x_snc_lic_alloc_role_map'
                        id: '4f6c89c3f5904f489532fa6fad9b5ac3'
                    }
                    'rm-fsm-wm-initiator': {
                        table: 'x_snc_lic_alloc_role_map'
                        id: '384e738e778c4e61bdf4d2d81f8a0426'
                    }
                    'rm-fsm-wm-manager': {
                        table: 'x_snc_lic_alloc_role_map'
                        id: 'a1eb945df0444bdcb9bb1e2dcbef20e3'
                    }
                    'rm-fsm-wm-qualifier': {
                        table: 'x_snc_lic_alloc_role_map'
                        id: 'e13e93c82a2144ed8786504dd7fd2ee8'
                    }
                    'rm-fsm-wm-read': {
                        table: 'x_snc_lic_alloc_role_map'
                        id: '257eff148261478cbf0f96547dfbeebe'
                    }
                    'rm-fsm-wm-task-initiator': {
                        table: 'x_snc_lic_alloc_role_map'
                        id: '35dbbbfd91f045b2be7d62e1dca434fe'
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
                    'rm-sir-admin': {
                        table: 'x_snc_lic_alloc_role_map'
                        id: 'b9fb2873722e4ef8a0860978ccea2edb'
                    }
                    'rm-sir-analyst': {
                        table: 'x_snc_lic_alloc_role_map'
                        id: '45dc7d61abe94496910031d96483462a'
                    }
                    'rm-sir-basic': {
                        table: 'x_snc_lic_alloc_role_map'
                        id: '9f2b138e13644b68a25b2d6d4c67c2c4'
                    }
                    'rm-sir-manager': {
                        table: 'x_snc_lic_alloc_role_map'
                        id: 'b78c42f9e0c543ab82674b240aecfa9d'
                    }
                    'rm-sir-read': {
                        table: 'x_snc_lic_alloc_role_map'
                        id: '1321c3f73a7a49ae8abdbf83c3ad0c86'
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
                    'si-pt-br-dictionary-seed': {
                        table: 'sys_script_include'
                        id: 'e612845613054bb1bbd8f2632074b182'
                        deleted: true
                    }
                    'source-ham': {
                        table: 'x_snc_lic_alloc_source'
                        id: 'c601fb575a524242879145b65a00fede'
                    }
                    'source-itom-visibility': {
                        table: 'x_snc_lic_alloc_source'
                        id: '66869593c59447449503af23f288a603'
                    }
                    'source-now-assist': {
                        table: 'x_snc_lic_alloc_source'
                        id: '36e2448482f54e4a94554dc50d7560ed'
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
                        deleted: true
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
                    src_server_PtBrDictionarySeed_server_js: {
                        table: 'sys_module'
                        id: '03c497a0188c44c384b31ce8c99c5315'
                        deleted: true
                    }
                    'suite-app-engine': {
                        table: 'x_snc_lic_alloc_suite'
                        id: '9aaaae008e7a4c01be3f64f110713d05'
                    }
                    'suite-csm': {
                        table: 'x_snc_lic_alloc_suite'
                        id: '77f115a9b0e44e058d7e7afd89ac1f8f'
                    }
                    'suite-fsm': {
                        table: 'x_snc_lic_alloc_suite'
                        id: 'f0b213ab2dd2463ca735d796d9276f58'
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
                    'suite-now-assist': {
                        table: 'x_snc_lic_alloc_suite'
                        id: '6e52130e7d9b4f04abffccae55664bda'
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
                    'tt-menu-license-allocation-title': {
                        table: 'sys_translated_text'
                        id: '4f1d475060fa4c77a9614e0a50f939c9'
                        deleted: true
                    }
                    'tt-module-dashboard-title': {
                        table: 'sys_translated_text'
                        id: '01a9c80e41c1402bb0ea17909f18a9f8'
                        deleted: true
                    }
                    'tt-module-entitlements-title': {
                        table: 'sys_translated_text'
                        id: 'e74a5b49ab934fd684c588ca4be46555'
                        deleted: true
                    }
                    'tt-module-role-map-title': {
                        table: 'sys_translated_text'
                        id: 'a47745022ff746e58b999aa8c80b47fd'
                        deleted: true
                    }
                    'tt-module-snapshots-title': {
                        table: 'sys_translated_text'
                        id: 'c57c57b378ad4c69a6d8591abf936462'
                        deleted: true
                    }
                    'tt-module-sources-title': {
                        table: 'sys_translated_text'
                        id: '5176f377fb4a458bb3f349505e238dfb'
                        deleted: true
                    }
                    'tt-module-suites-title': {
                        table: 'sys_translated_text'
                        id: '99ba5599fc394c2781c4918ffe50421c'
                        deleted: true
                    }
                    'tt-rm-itsm-change-manager-app-label': {
                        table: 'sys_translated_text'
                        id: 'e7eeeeccb4344562a8b87621f381b1b6'
                        deleted: true
                    }
                    'tt-rm-itsm-incident-manager-app-label': {
                        table: 'sys_translated_text'
                        id: '70bd04120ae1413aa50e24bdea845631'
                        deleted: true
                    }
                    'tt-rm-itsm-itil-app-label': {
                        table: 'sys_translated_text'
                        id: 'b510bbad0e674e2893ba433d41e59595'
                        deleted: true
                    }
                    'tt-rm-itsm-major-incident-manager-app-label': {
                        table: 'sys_translated_text'
                        id: '8b5a501991e842e194d323781a5204e2'
                        deleted: true
                    }
                    'tt-rm-itsm-problem-coordinator-app-label': {
                        table: 'sys_translated_text'
                        id: 'fd61ff400505492a96f91b72ecb8eb2d'
                        deleted: true
                    }
                    'tt-rm-itsm-problem-manager-app-label': {
                        table: 'sys_translated_text'
                        id: 'a8e0d2dcf0ad4622a33196c832d717f3'
                        deleted: true
                    }
                    'tt-rm-itsm-problem-task-analyst-app-label': {
                        table: 'sys_translated_text'
                        id: 'e62d4d8c394644688fa741ced873c38b'
                        deleted: true
                    }
                    'tt-rm-itsm-sn-change-read-app-label': {
                        table: 'sys_translated_text'
                        id: 'eb4f8e72de98406fb0a828918b22370f'
                        deleted: true
                    }
                    'tt-rm-itsm-sn-change-write-app-label': {
                        table: 'sys_translated_text'
                        id: '9786cad8b3274f97b26bb0058ad720e5'
                        deleted: true
                    }
                    'tt-rm-itsm-sn-incident-read-app-label': {
                        table: 'sys_translated_text'
                        id: 'e9dabda1516a447f835552ccbd14579a'
                        deleted: true
                    }
                    'tt-rm-itsm-sn-incident-write-app-label': {
                        table: 'sys_translated_text'
                        id: '660b4b0321d449e797397237e6e03910'
                        deleted: true
                    }
                    'tt-rm-itsm-sn-problem-read-app-label': {
                        table: 'sys_translated_text'
                        id: '57bd93a3c89442eeb0bc31d24b767a6a'
                        deleted: true
                    }
                    'tt-rm-itsm-sn-problem-write-app-label': {
                        table: 'sys_translated_text'
                        id: '505a6e7ea8204de99c70608028e278a3'
                        deleted: true
                    }
                    'tt-rm-itsm-sn-request-read-app-label': {
                        table: 'sys_translated_text'
                        id: '5ea16cdb5fc6489fba7af3c3e70c0c4e'
                        deleted: true
                    }
                    'tt-rm-itsm-sn-request-write-app-label': {
                        table: 'sys_translated_text'
                        id: '5fc04d3c9c2b4fb2877d2770b91e8013'
                        deleted: true
                    }
                    'tt-rm-sir-admin-app-label': {
                        table: 'sys_translated_text'
                        id: 'bb1478eee3ed42ffa4a539481778e0d4'
                        deleted: true
                    }
                    'tt-rm-sir-analyst-app-label': {
                        table: 'sys_translated_text'
                        id: '7b7ed7c3770e43f9acaa5e328ab04b73'
                        deleted: true
                    }
                    'tt-rm-sir-basic-app-label': {
                        table: 'sys_translated_text'
                        id: '633a90fc012f4db5be1279cd4df4f50d'
                        deleted: true
                    }
                    'tt-rm-sir-manager-app-label': {
                        table: 'sys_translated_text'
                        id: '4a2ea0e131fb471fa42f7495603d868c'
                        deleted: true
                    }
                    'tt-rm-sir-read-app-label': {
                        table: 'sys_translated_text'
                        id: '930778d884cf4d059d809d0a185aa89f'
                        deleted: true
                    }
                    'tt-rm-spm-demand-approver-app-label': {
                        table: 'sys_translated_text'
                        id: '10e5415c53514d41b2d9567cc33d7cbe'
                        deleted: true
                    }
                    'tt-rm-spm-demand-manager-app-label': {
                        table: 'sys_translated_text'
                        id: '928ee594447e4680af8b173045731215'
                        deleted: true
                    }
                    'tt-rm-spm-demand-user-app-label': {
                        table: 'sys_translated_text'
                        id: 'b02dae16e2b5405b9efd5c58ef16a572'
                        deleted: true
                    }
                    'tt-rm-spm-itfm-planner-app-label': {
                        table: 'sys_translated_text'
                        id: '9ebd6f80195a4b0a9d83106280729310'
                        deleted: true
                    }
                    'tt-rm-spm-portfolio-manager-app-label': {
                        table: 'sys_translated_text'
                        id: '45b6fb5fa6b142cfb95cc90611d5aa78'
                        deleted: true
                    }
                    'tt-rm-spm-pps-admin-app-label': {
                        table: 'sys_translated_text'
                        id: '4cdcc565e63441da934cf2b758596550'
                        deleted: true
                    }
                    'tt-rm-spm-program-manager-app-label': {
                        table: 'sys_translated_text'
                        id: '975a40d70f7344d4bd4cebe449841a6f'
                        deleted: true
                    }
                    'tt-rm-spm-project-manager-app-label': {
                        table: 'sys_translated_text'
                        id: 'd386cb09b589491fa259de5ebbcc6918'
                        deleted: true
                    }
                    'tt-rm-spm-project-portfolio-user-app-label': {
                        table: 'sys_translated_text'
                        id: '90fae701bf274512a9b3008c1b7cd17d'
                        deleted: true
                    }
                    'tt-rm-spm-project-user-app-label': {
                        table: 'sys_translated_text'
                        id: '24e496747808418db7e7c3539b4bb985'
                        deleted: true
                    }
                    'tt-rm-spm-rate-model-admin-app-label': {
                        table: 'sys_translated_text'
                        id: 'bb89524497124d5cad8bc3df0315bb13'
                        deleted: true
                    }
                    'tt-rm-spm-rate-model-user-app-label': {
                        table: 'sys_translated_text'
                        id: '482f9a1770084bdeaa494b4cfc634be4'
                        deleted: true
                    }
                    'tt-rm-spm-resource-manager-app-label': {
                        table: 'sys_translated_text'
                        id: '04ddd541d09f437096036cd4f5c3691f'
                        deleted: true
                    }
                    'tt-rm-spm-resource-user-app-label': {
                        table: 'sys_translated_text'
                        id: '3e38b45f4bac4ca8af7c42ba3583aa4a'
                        deleted: true
                    }
                    'tt-rm-spm-sn-ppm-read-app-label': {
                        table: 'sys_translated_text'
                        id: '8cdc08d6cbc5496cb902e705709d88de'
                        deleted: true
                    }
                    'tt-source-ham-label': {
                        table: 'sys_translated_text'
                        id: '33da1cc4e5d54d5e833ab34b270ad30c'
                        deleted: true
                    }
                    'tt-source-itom-visibility-label': {
                        table: 'sys_translated_text'
                        id: 'dd44fe54701b4b9f8c20f4f1d41f24f1'
                        deleted: true
                    }
                    'tt-source-rpa-label': {
                        table: 'sys_translated_text'
                        id: 'f9e8a7f324d5474188331ca5559c1028'
                        deleted: true
                    }
                    'tt-source-sam-label': {
                        table: 'sys_translated_text'
                        id: '3401bf14462e491eb772a2d4e8878514'
                        deleted: true
                    }
                    'tt-source-vr-label': {
                        table: 'sys_translated_text'
                        id: '32e189ca3e3d4b1b8feca24bfd488c6f'
                        deleted: true
                    }
                    'tt-suite-app-engine-methodology': {
                        table: 'sys_translated_text'
                        id: '05e72a337e854d338ac758cb624d129e'
                        deleted: true
                    }
                    'tt-suite-ham-methodology': {
                        table: 'sys_translated_text'
                        id: 'bb44345fe3904fbbbb884f2b1a2f05c0'
                        deleted: true
                    }
                    'tt-suite-ham-name': {
                        table: 'sys_translated_text'
                        id: 'ef49c9ea225c4a00a7eb70dd1188cc31'
                        deleted: true
                    }
                    'tt-suite-itom-visibility-methodology': {
                        table: 'sys_translated_text'
                        id: '93d565857ecc47c7aa80de9598d6bdf1'
                        deleted: true
                    }
                    'tt-suite-itsm-methodology': {
                        table: 'sys_translated_text'
                        id: '36681ca5d6d54de5b9114b7a835c780e'
                        deleted: true
                    }
                    'tt-suite-itsm-name': {
                        table: 'sys_translated_text'
                        id: '7d847b871cd84a29afcb7df4bcc1399e'
                        deleted: true
                    }
                    'tt-suite-rpa-methodology': {
                        table: 'sys_translated_text'
                        id: '58dce6413e3a48a695714703979286ea'
                        deleted: true
                    }
                    'tt-suite-rpa-name': {
                        table: 'sys_translated_text'
                        id: '6a4161ab3c514705860c0bf06a4e0a74'
                        deleted: true
                    }
                    'tt-suite-sam-methodology': {
                        table: 'sys_translated_text'
                        id: '0e92a1590af5419899c5db1ab30d58ab'
                        deleted: true
                    }
                    'tt-suite-sam-name': {
                        table: 'sys_translated_text'
                        id: 'bcd1659610ae41ffaf04c9ea33288e22'
                        deleted: true
                    }
                    'tt-suite-sir-methodology': {
                        table: 'sys_translated_text'
                        id: '11cbf0e4c27b43219363e1be0c4e43ba'
                        deleted: true
                    }
                    'tt-suite-sir-name': {
                        table: 'sys_translated_text'
                        id: 'ccff7cda22c04870a06bc460ab0210e5'
                        deleted: true
                    }
                    'tt-suite-spm-methodology': {
                        table: 'sys_translated_text'
                        id: 'e187c4f337824abb945a49537ca76f89'
                        deleted: true
                    }
                    'tt-suite-spm-name': {
                        table: 'sys_translated_text'
                        id: '5dd231e85885438aa61c0784b3e846db'
                        deleted: true
                    }
                    'tt-suite-unrestricted-methodology': {
                        table: 'sys_translated_text'
                        id: 'fb70b2b9e5ea46c087e7e8cda1349097'
                        deleted: true
                    }
                    'tt-suite-unrestricted-name': {
                        table: 'sys_translated_text'
                        id: 'f01baa7a94e5496e824a4b7a5372ecc2'
                        deleted: true
                    }
                    'tt-suite-vr-methodology': {
                        table: 'sys_translated_text'
                        id: '7bab92ba466b42b189ceeeb02bd8f4d9'
                        deleted: true
                    }
                    'tt-suite-vr-name': {
                        table: 'sys_translated_text'
                        id: 'fb133e0ea361437e9668e5fc9906f9d4'
                        deleted: true
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
                        table: 'sys_choice'
                        id: '011a111a8b9c45eabda213a9aa22da2d'
                        key: {
                            name: 'x_snc_lic_alloc_role_map'
                            element: 'source'
                            value: 'default'
                            language: 'pb'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '044e36ef263d4a7db7267fb9ab1722b5'
                        key: {
                            name: 'x_snc_lic_alloc_suite'
                            element: 'counting_method'
                            value: 'not_measurable'
                            language: 'pb'
                            dependent_value: 'NULL'
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
                        id: '04f58293c25b4bd088130038dd5db0f4'
                        key: {
                            name: 'x_snc_lic_alloc_snapshot'
                            element: 'active_365_count'
                            language: 'pb'
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
                        table: 'sys_choice'
                        id: '09064d84275b4aee8408e13e67737260'
                        key: {
                            name: 'x_snc_lic_alloc_snapshot'
                            element: 'data_status'
                            value: 'table_missing'
                            language: 'pb'
                            dependent_value: 'NULL'
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
                        table: 'sys_documentation'
                        id: '0b9a9e43a7bf4bd9ae2fcf5c5d69ba54'
                        key: {
                            name: 'x_snc_lic_alloc_suite'
                            element: 'methodology'
                            language: 'pb'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0c031384d1ec42d89f3ef0b1c2b36dfc'
                        key: {
                            name: 'x_snc_lic_alloc_source'
                            element: 'extra_filter'
                            language: 'pb'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0c9b7d6f6bde43d9933e7e6fd3577d02'
                        key: {
                            name: 'x_snc_lic_alloc_entitlement'
                            element: 'prod_code'
                            language: 'pb'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0d280d3535da4ad2b55d91fe394756ea'
                        key: {
                            name: 'x_snc_lic_alloc_source'
                            element: 'date_field'
                            language: 'pb'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0d9890ab0c2f4ae89a658dab3cd00dc7'
                        key: {
                            name: 'x_snc_lic_alloc_snapshot'
                            element: 'is_detail'
                            language: 'pb'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '0ed01c5d3d7645349f6267f4c1d193cb'
                        key: {
                            sys_security_acl: 'c7f315fd46e74a2c9baecc2eaf754eaf'
                            sys_user_role: {
                                id: '157ec342eee64330b009da32426c1705'
                                key: {
                                    name: 'admin'
                                }
                            }
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
                        table: 'sys_documentation'
                        id: '139ab802b16743038f063409cf661625'
                        key: {
                            name: 'x_snc_lic_alloc_snapshot'
                            element: 'NULL'
                            language: 'pb'
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
                        table: 'sys_documentation'
                        id: '1755be8951de425499eddef130c186f7'
                        key: {
                            name: 'x_snc_lic_alloc_source'
                            element: 'NULL'
                            language: 'pb'
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
                        table: 'sys_security_acl_role'
                        id: '19c90b93ca64435f99b5f36fcb2612ae'
                        key: {
                            sys_security_acl: '1fef8d9bd4d24397b92f14003c53c23b'
                            sys_user_role: {
                                id: '157ec342eee64330b009da32426c1705'
                                key: {
                                    name: 'admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '1a6fe608f39f49fc8462035bdd93b671'
                        key: {
                            name: 'x_snc_lic_alloc_role_map'
                            element: 'source'
                            language: 'pb'
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
                        table: 'sys_documentation'
                        id: '21b6e312fe574cbc91129fb42625451f'
                        key: {
                            name: 'x_snc_lic_alloc_snapshot'
                            element: 'allocated_count'
                            language: 'pb'
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
                        table: 'sys_documentation'
                        id: '2285e2fb7bf84843ac9b60de58a5e133'
                        key: {
                            name: 'x_snc_lic_alloc_suite'
                            element: 'code'
                            language: 'pb'
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
                        table: 'sys_security_acl_role'
                        id: '24c138eda1f14ac1873628a3d7238c37'
                        key: {
                            sys_security_acl: '22f5a3865a254da58893df179d62f891'
                            sys_user_role: {
                                id: '157ec342eee64330b009da32426c1705'
                                key: {
                                    name: 'admin'
                                }
                            }
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
                        id: '2595c2fd44c84ef2938a88c7675db338'
                        key: {
                            name: 'x_snc_lic_alloc_source'
                            element: 'active'
                            language: 'pb'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2617c613a6ab49978b96620952bc0a23'
                        key: {
                            name: 'x_snc_lic_alloc_suite'
                            element: 'unit'
                            language: 'pb'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '26be5f2d775a4d03bb85dc32805a6eaa'
                        key: {
                            name: 'x_snc_lic_alloc_source'
                            element: 'status_field'
                            language: 'pb'
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
                        id: '28adf8823b3041dc9782f9e0bfc33234'
                        key: {
                            name: 'x_snc_lic_alloc_role_map'
                            element: 'role_type'
                            language: 'pb'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '29546a13cdfc48b4ba624bb49ec9ec0d'
                        key: {
                            sys_security_acl: '5eed1d0d28d14410a72a8e8e0e901ff7'
                            sys_user_role: {
                                id: '157ec342eee64330b009da32426c1705'
                                key: {
                                    name: 'admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '29e79ec0f2074fadb71c823b9ef2bac9'
                        key: {
                            name: 'x_snc_lic_alloc_entitlement'
                            element: 'sku_unit'
                            language: 'pb'
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
                        id: '2c187d1db01a4ed6abdb79961b6365eb'
                        key: {
                            name: 'x_snc_lic_alloc_source'
                            element: 'value_basis'
                            language: 'pb'
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
                        table: 'sys_documentation'
                        id: '2d38daadac6a4412ba583892677cb2e1'
                        key: {
                            name: 'x_snc_lic_alloc_snapshot'
                            element: 'su_count'
                            language: 'pb'
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
                        table: 'sys_documentation'
                        id: '34b417efba65464188c630cc1006f969'
                        key: {
                            name: 'x_snc_lic_alloc_snapshot'
                            element: 'application_label'
                            language: 'pb'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '37f17d8ea8c545af8f4ad7c8eda386fd'
                        key: {
                            sys_security_acl: '444686fb744346b08455db1b52eaa6af'
                            sys_user_role: {
                                id: '157ec342eee64330b009da32426c1705'
                                key: {
                                    name: 'admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '38feda67a83a4902859c074745b2186b'
                        key: {
                            name: 'x_snc_lic_alloc_suite'
                            element: 'dashboard_visible'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '391328b024184a72a31d4e8e541f0a94'
                        key: {
                            name: 'x_snc_lic_alloc_suite'
                            element: 'name'
                            language: 'pb'
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
                        table: 'sys_documentation'
                        id: '39bcf2597d844096b6efff12b86330a9'
                        key: {
                            name: 'x_snc_lic_alloc_entitlement'
                            element: 'product_name'
                            language: 'pb'
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
                        table: 'sys_security_acl_role'
                        id: '3c14cc54949a4ab0bb501ed630c4fe05'
                        key: {
                            sys_security_acl: '4147c5b221a74b3e9c071127c7f848f5'
                            sys_user_role: {
                                id: '157ec342eee64330b009da32426c1705'
                                key: {
                                    name: 'admin'
                                }
                            }
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
                        table: 'sys_security_acl_role'
                        id: '5005a228b86c4520ab2f111bdab38d99'
                        key: {
                            sys_security_acl: '470bf52ec9d14eb0b75cd90f12fc89e7'
                            sys_user_role: {
                                id: '157ec342eee64330b009da32426c1705'
                                key: {
                                    name: 'admin'
                                }
                            }
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
                        table: 'sys_dictionary'
                        id: '57ffd4be2c6a40d680c0836cc12ffba3'
                        key: {
                            name: 'x_snc_lic_alloc_snapshot'
                            element: 'application_label'
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
                        id: '5a48a0d60ddd4083b27b054741bd8436'
                        key: {
                            name: 'x_snc_lic_alloc_snapshot'
                            element: 'su_ratio'
                            language: 'pb'
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
                        table: 'sys_documentation'
                        id: '5d224dca35b844068c065839a9c67a20'
                        key: {
                            name: 'x_snc_lic_alloc_snapshot'
                            element: 'is_detail'
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
                        table: 'sys_security_acl_role'
                        id: '613c99d2dd9642569adcfd9cbb8f2677'
                        key: {
                            sys_security_acl: '2c1fc2d68e7145739ec8f62002e457e6'
                            sys_user_role: {
                                id: '157ec342eee64330b009da32426c1705'
                                key: {
                                    name: 'admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '61ad8b6d66ca434c947a72a1c71cf954'
                        key: {
                            name: 'x_snc_lic_alloc_snapshot'
                            element: 'application_label'
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
                        table: 'sys_security_acl_role'
                        id: '6816db921cf54415a0d0f97fab2ed94f'
                        key: {
                            sys_security_acl: 'ff35f10787134c838daeb8182823898b'
                            sys_user_role: {
                                id: '157ec342eee64330b009da32426c1705'
                                key: {
                                    name: 'admin'
                                }
                            }
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
                        table: 'sys_security_acl_role'
                        id: '696144772d7e4ac1b48baedcb23b3ab7'
                        key: {
                            sys_security_acl: '381fd40d340049558135b007101df183'
                            sys_user_role: {
                                id: '157ec342eee64330b009da32426c1705'
                                key: {
                                    name: 'admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '70499802c9364246a108437883d3d610'
                        key: {
                            name: 'x_snc_lic_alloc_source'
                            element: 'product_field'
                            language: 'pb'
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
                        id: '7719c5144c8d420ba5542ee97fe7fc65'
                        key: {
                            name: 'x_snc_lic_alloc_snapshot'
                            element: 'category'
                            language: 'pb'
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
                        table: 'sys_dictionary'
                        id: '7a29920eee3c41b5828c3e18fa101bbd'
                        key: {
                            name: 'x_snc_lic_alloc_suite'
                            element: 'dashboard_visible'
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
                        table: 'sys_documentation'
                        id: '7dfcbcb7efc34a7abb9acfedddcea3d0'
                        key: {
                            name: 'x_snc_lic_alloc_snapshot'
                            element: 'suite'
                            language: 'pb'
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
                        table: 'sys_security_acl_role'
                        id: '817da0dde7e0459994990b2e2e228a0f'
                        key: {
                            sys_security_acl: '1c591e240ddf411d90c891364c5fea40'
                            sys_user_role: {
                                id: '157ec342eee64330b009da32426c1705'
                                key: {
                                    name: 'admin'
                                }
                            }
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
                        table: 'sys_documentation'
                        id: '84e2f08463fe42ae9f3c9c4fa5d76754'
                        key: {
                            name: 'x_snc_lic_alloc_suite'
                            element: 'display_order'
                            language: 'pb'
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
                        table: 'sys_documentation'
                        id: '8ab483a813e6492e870d7d51f4147432'
                        key: {
                            name: 'x_snc_lic_alloc_snapshot'
                            element: 'data_status'
                            language: 'pb'
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
                        table: 'sys_security_acl_role'
                        id: '8d332f16bf764cf8aad500a576749b23'
                        key: {
                            sys_security_acl: 'f9f137d926db4c9e98850489c52ef90d'
                            sys_user_role: {
                                id: '157ec342eee64330b009da32426c1705'
                                key: {
                                    name: 'admin'
                                }
                            }
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
                        table: 'sys_choice'
                        id: '954919ecfd884d3fac2476d6b5dbc4fb'
                        key: {
                            name: 'x_snc_lic_alloc_snapshot'
                            element: 'data_status'
                            value: 'not_measurable'
                            language: 'pb'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '955ac329b73348c79ef136a2dc1e0611'
                        key: {
                            sys_security_acl: 'a4073d2e6fd246ae8725b3069c1207bc'
                            sys_user_role: {
                                id: '157ec342eee64330b009da32426c1705'
                                key: {
                                    name: 'admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '96ef6a3466d7414aaf487c2187c26f67'
                        key: {
                            name: 'x_snc_lic_alloc_suite'
                            element: 'counting_method'
                            value: 'unrestricted'
                            language: 'pb'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '97cdf850ddd042078b348a3d04204a69'
                        key: {
                            name: 'x_snc_lic_alloc_suite'
                            element: 'counting_method'
                            value: 'role_based'
                            language: 'pb'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '97ecc1cd06cf44a68299d02ab2b28400'
                        key: {
                            name: 'x_snc_lic_alloc_source'
                            element: 'label'
                            language: 'pb'
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
                        table: 'sys_choice'
                        id: '9921fc3ca68944c7bdb8a757341fd01e'
                        key: {
                            name: 'x_snc_lic_alloc_suite'
                            element: 'counting_method'
                            value: 'native_counts'
                            language: 'pb'
                            dependent_value: 'NULL'
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
                        id: '9ae88fbcbd0644e1b55543402ea6089f'
                        key: {
                            name: 'x_snc_lic_alloc_suite'
                            element: 'active'
                            language: 'pb'
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
                        id: '9f9461ab754e409aaaf8b9c71aaab65b'
                        key: {
                            name: 'x_snc_lic_alloc_entitlement'
                            element: 'contract_quantity'
                            language: 'pb'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'a34cbf34a6bc43a09bef5bc96a38809e'
                        key: {
                            sys_security_acl: 'ee0352b76a424108a20b485dadfe27d9'
                            sys_user_role: {
                                id: '157ec342eee64330b009da32426c1705'
                                key: {
                                    name: 'admin'
                                }
                            }
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
                        table: 'sys_security_acl_role'
                        id: 'a41486e8001e46b5840c2590073b95e5'
                        key: {
                            sys_security_acl: '2a8c6cd48bab4c7faae7d4cf86a1978e'
                            sys_user_role: {
                                id: '157ec342eee64330b009da32426c1705'
                                key: {
                                    name: 'admin'
                                }
                            }
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
                        table: 'sys_documentation'
                        id: 'a66641ce8781448bbde254bc561e681d'
                        key: {
                            name: 'x_snc_lic_alloc_role_map'
                            element: 'role'
                            language: 'pb'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a69e6ddeff794997b21b3850d0bde790'
                        key: {
                            name: 'x_snc_lic_alloc_suite'
                            element: 'collection_enabled'
                            language: 'pb'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a7a521dd59f74655a64b46be08496458'
                        key: {
                            name: 'x_snc_lic_alloc_entitlement'
                            element: 'active'
                            language: 'pb'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a7d72b6d315f4b0087835bc819ff5a60'
                        key: {
                            name: 'x_snc_lic_alloc_suite'
                            element: 'NULL'
                            language: 'pb'
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
                        id: 'a8fcdc52050a488c939906cba121c657'
                        key: {
                            name: 'x_snc_lic_alloc_source'
                            element: 'value_basis'
                            value: 'resource_count'
                            language: 'pb'
                            dependent_value: 'NULL'
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
                        id: 'aa4a1649522849a598c1167e15f01b65'
                        key: {
                            name: 'x_snc_lic_alloc_source'
                            element: 'category_field'
                            language: 'pb'
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
                        table: 'sys_security_acl_role'
                        id: 'ad8ad93872444336a0b97ab2a55a3d9d'
                        key: {
                            sys_security_acl: '93495945f6bf480d9c6b3eadaecd6e1d'
                            sys_user_role: {
                                id: '157ec342eee64330b009da32426c1705'
                                key: {
                                    name: 'admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'aeb954485ec942ad8e225ede187111c4'
                        key: {
                            name: 'x_snc_lic_alloc_source'
                            element: 'product_value'
                            language: 'pb'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'afb6f5b74c7147828dc62386c56c0d07'
                        key: {
                            name: 'x_snc_lic_alloc_source'
                            element: 'entitled_field'
                            language: 'pb'
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
                        table: 'sys_documentation'
                        id: 'b2b9dfe4bb8343c9b7142243dde1c4ae'
                        key: {
                            name: 'x_snc_lic_alloc_role_map'
                            element: 'application_label'
                            language: 'pb'
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
                        table: 'sys_documentation'
                        id: 'b38699dd13f64b8e9babcf8fc7789be1'
                        key: {
                            name: 'x_snc_lic_alloc_source'
                            element: 'su_field'
                            language: 'pb'
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
                        table: 'sys_security_acl_role'
                        id: 'b3ae7404e7d241daad17f9eed1558787'
                        key: {
                            sys_security_acl: '048871ee2dff4b6ca2bd6eab56bade76'
                            sys_user_role: {
                                id: '157ec342eee64330b009da32426c1705'
                                key: {
                                    name: 'admin'
                                }
                            }
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
                        table: 'sys_documentation'
                        id: 'b3f2a22fe03146bdbc29232fce5920f2'
                        key: {
                            name: 'x_snc_lic_alloc_role_map'
                            element: 'suite'
                            language: 'pb'
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
                        table: 'sys_choice'
                        id: 'bf05cbe319724ff2bad80a6e18e4ba4e'
                        key: {
                            name: 'x_snc_lic_alloc_snapshot'
                            element: 'data_status'
                            value: 'ok'
                            language: 'pb'
                            dependent_value: 'NULL'
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
                        table: 'sys_security_acl_role'
                        id: 'bfd8963a9c9a469cba71a65a1df0d842'
                        key: {
                            sys_security_acl: '958724ee3d724c77916bf49e28d4b7fa'
                            sys_user_role: {
                                id: '157ec342eee64330b009da32426c1705'
                                key: {
                                    name: 'admin'
                                }
                            }
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
                        table: 'sys_documentation'
                        id: 'c000ec79728a4c3bb6840129d7c0bc20'
                        key: {
                            name: 'x_snc_lic_alloc_suite'
                            element: 'counting_method'
                            language: 'pb'
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
                        id: 'c264179764864a4c93b454788f0cef5f'
                        key: {
                            name: 'x_snc_lic_alloc_snapshot'
                            element: 'resource_count'
                            language: 'pb'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c3968749443d4d8b8a3456358db25c47'
                        key: {
                            name: 'x_snc_lic_alloc_entitlement'
                            element: 'NULL'
                            language: 'pb'
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
                        table: 'sys_security_acl_role'
                        id: 'c61c9f6bd9bb45b7b760e36f14deba8a'
                        key: {
                            sys_security_acl: '94a5dd1fead342ff85340e7992666eae'
                            sys_user_role: {
                                id: '157ec342eee64330b009da32426c1705'
                                key: {
                                    name: 'admin'
                                }
                            }
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
                        id: 'c8bf6f95425d441e9666223a553d5cf3'
                        key: {
                            name: 'x_snc_lic_alloc_snapshot'
                            element: 'source_job_status'
                            language: 'pb'
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
                        table: 'sys_documentation'
                        id: 'd02da796bc4a414fa271df3afe2b59a1'
                        key: {
                            name: 'x_snc_lic_alloc_snapshot'
                            element: 'entitled'
                            language: 'pb'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'd0a2d847aec34fc2b829d979f898484b'
                        key: {
                            sys_security_acl: '068a4dac5d324600962a9964a1482418'
                            sys_user_role: {
                                id: '157ec342eee64330b009da32426c1705'
                                key: {
                                    name: 'admin'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd0d430e1d4a94d65a2e0e93fb0f7816d'
                        key: {
                            name: 'x_snc_lic_alloc_source'
                            element: 'source_table'
                            language: 'pb'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd16dd577671447e689337c195a14f72c'
                        key: {
                            name: 'x_snc_lic_alloc_entitlement'
                            element: 'source_instance'
                            language: 'pb'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd17e9a0418b74e00be921782274eea25'
                        key: {
                            name: 'x_snc_lic_alloc_snapshot'
                            element: 'snapshot_date'
                            language: 'pb'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd2049a81f2f044f2a35e554f96dfe3f5'
                        key: {
                            name: 'x_snc_lic_alloc_entitlement'
                            element: 'suite'
                            language: 'pb'
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
                        table: 'sys_choice'
                        id: 'd5e6474c921b4410a16db52bdf91cb81'
                        key: {
                            name: 'x_snc_lic_alloc_source'
                            element: 'value_basis'
                            value: 'subscription_units'
                            language: 'pb'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'd6c1a7c580844b1fae3e42173d1e65a8'
                        key: {
                            name: 'x_snc_lic_alloc_suite'
                            element: 'unit'
                            value: 'assist'
                            language: 'en'
                            dependent_value: 'NULL'
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
                        table: 'sys_documentation'
                        id: 'da4cfb17b2a440e38a15219a277f58bc'
                        key: {
                            name: 'x_snc_lic_alloc_snapshot'
                            element: 'role_type'
                            language: 'pb'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'da62576ed86c42d9ade4e9a8d0a02c75'
                        key: {
                            sys_security_acl: 'c89ac3dfb6434a12b351cd913d30f2eb'
                            sys_user_role: {
                                id: '157ec342eee64330b009da32426c1705'
                                key: {
                                    name: 'admin'
                                }
                            }
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
                        table: 'sys_documentation'
                        id: 'da9ab1bba9e34b4f83a2e39f04f83ae4'
                        key: {
                            name: 'x_snc_lic_alloc_suite'
                            element: 'dashboard_visible'
                            language: 'pb'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'db6de7ba9e0c429ba1f8c7702a888860'
                        key: {
                            name: 'x_snc_lic_alloc_role_map'
                            element: 'active'
                            language: 'pb'
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
                        table: 'sys_documentation'
                        id: 'dc2a61d384b841d9a654fb69b0e22d48'
                        key: {
                            name: 'x_snc_lic_alloc_source'
                            element: 'suite'
                            language: 'pb'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ddaf87848b8441ed87c36b2be15465ed'
                        key: {
                            name: 'x_snc_lic_alloc_source'
                            element: 'count_field'
                            language: 'pb'
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
                        table: 'sys_choice'
                        id: 'e11de8990f0947008a8833953a45c05f'
                        key: {
                            name: 'x_snc_lic_alloc_role_map'
                            element: 'source'
                            value: 'manual'
                            language: 'pb'
                            dependent_value: 'NULL'
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
                        table: 'sys_choice'
                        id: 'f447ebe673164da4ba9b68c8d576999f'
                        key: {
                            name: 'x_snc_lic_alloc_snapshot'
                            element: 'data_status'
                            value: 'no_data'
                            language: 'pb'
                            dependent_value: 'NULL'
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
                        table: 'sys_documentation'
                        id: 'f4d1b9d2f70c44289dc6466dd733af26'
                        key: {
                            name: 'x_snc_lic_alloc_source'
                            element: 'ratio_field'
                            language: 'pb'
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
                        id: 'f589351c3796494abce17f08849a6310'
                        key: {
                            name: 'x_snc_lic_alloc_snapshot'
                            element: 'error_message'
                            language: 'pb'
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
                        table: 'sys_dictionary'
                        id: 'f6a345b7066e42d98b09379155477b09'
                        key: {
                            name: 'x_snc_lic_alloc_snapshot'
                            element: 'is_detail'
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
                        table: 'sys_documentation'
                        id: 'f8ec1a62725040b78b25013159e56456'
                        key: {
                            name: 'x_snc_lic_alloc_role_map'
                            element: 'NULL'
                            language: 'pb'
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
                        table: 'sys_choice'
                        id: 'fd122e005c2f4c05805c2d551dc46c5b'
                        key: {
                            name: 'x_snc_lic_alloc_snapshot'
                            element: 'data_status'
                            value: 'error'
                            language: 'pb'
                            dependent_value: 'NULL'
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
