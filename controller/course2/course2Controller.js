app.controller("course2Controller", ["$compile", "$scope", "$rootScope", "dataService", "$filter", "$state", "$interval", "$stateParams", "$uibModal", "jwplayer", "$window", function ($compile, $scope, $rootScope, dataService, $filter, $state, $interval, $stateParams, $uibModal, jwplayer, $window) {

    $scope.userId = ($rootScope.authenticatedUser.UserInfo.First_Name) ? $rootScope.authenticatedUser.UserInfo.User_Id : "0";
    

    $scope.clickMe = function () {
        //
        var webURL = 'appData/zoneData.json'
        dataService.getData(webURL).then(function (data) {
            console.log(data)
        }, function (errorMessage) {
            console.log(errorMessage + ' Error......');
        });
    }

    $scope.signOut = function () {
        //singn out
        $rootScope.$emit('signOut', $rootScope.authenticatedUser.UserInfo.User_Id);
        $rootScope.authenticatedUser = {};
        $rootScope.authenticatedUser.UserInfo = {};
        $state.go('home');
    }

    $scope.slide = function (dir) {
        $('#carousel-example-generic').carousel(dir);
    };

    $scope.getAllNotification = function () {
        $rootScope.$emit('updateNotification', $rootScope.authenticatedUser.UserInfo.User_Id);
    }

    $scope.overviewDisplay = false;
    //open the talk description
    $scope.getmodule1TalkOverview = function (talkId) {
        $scope.module1overViewDetails = _.filter($scope.module1List.List, function (d) { return d.TalkId === talkId; });
        $scope.overviewDisplay = true;
    }
    $scope.getmodule2TalkOverview = function (talkId) {
        $scope.module2overViewDetails = _.filter($scope.module2List.List, function (d) { return d.TalkId === talkId; });
        $scope.overviewDisplay = true;
    }
    $scope.getmodule3TalkOverview = function (talkId) {
        $scope.module3overViewDetails = _.filter($scope.module3List.List, function (d) { return d.TalkId === talkId; });
        $scope.overviewDisplay = true;
    }
    $scope.getmodule4TalkOverview = function (talkId) {
        $scope.module4overViewDetails = _.filter($scope.module4List.List, function (d) { return d.TalkId === talkId; });
        $scope.overviewDisplay = true;
    }
    $scope.getmodule5TalkOverview = function (talkId) {
        $scope.module5overViewDetails = _.filter($scope.module5List.List, function (d) { return d.TalkId === talkId; });
        $scope.overviewDisplay = true;
    }
    $scope.getmodule6TalkOverview = function (talkId) {
        $scope.module6overViewDetails = _.filter($scope.module6List.List, function (d) { return d.TalkId === talkId; });
        $scope.overviewDisplay = true;
    }
    $scope.getmodule7TalkOverview = function (talkId) {
        $scope.module7overViewDetails = _.filter($scope.module7List.List, function (d) { return d.TalkId === talkId; });
        $scope.overviewDisplay = true;
    }
    $scope.getmodule8TalkOverview = function (talkId) {
        $scope.module8overViewDetails = _.filter($scope.module8List.List, function (d) { return d.TalkId === talkId; });
        $scope.overviewDisplay = true;
    }
    $scope.getmodule9TalkOverview = function (talkId) {
        $scope.module9overViewDetails = _.filter($scope.module9List.List, function (d) { return d.TalkId === talkId; });
        $scope.overviewDisplay = true;
    }
    $scope.getmodule10TalkOverview = function (talkId) {
        $scope.module10overViewDetails = _.filter($scope.module10List.List, function (d) { return d.TalkId === talkId; });
        $scope.overviewDisplay = true;
    }
    $scope.getmodule11TalkOverview = function (talkId) {
        $scope.module11overViewDetails = _.filter($scope.module11List.List, function (d) { return d.TalkId === talkId; });
        $scope.overviewDisplay = true;
    }
    $scope.getmodule12TalkOverview = function (talkId) {
        $scope.module12overViewDetails = _.filter($scope.module12List.List, function (d) { return d.TalkId === talkId; });
        $scope.overviewDisplay = true;
    }
    
    //open video and previewvideo script
    $scope.module1OpenSpeakerVideo = function (talkId) {         
        $scope.module1Video = _.filter($scope.module1List.List, function (d) { return d.TalkId === talkId; });   
        $window.open($scope.module1Video[0].PreViewVideoLink);
    }
    $scope.module2OpenSpeakerVideo = function (talkId) {         
        $scope.module2Video = _.filter($scope.module2List.List, function (d) { return d.TalkId === talkId; });   
        $window.open($scope.module2Video[0].PreViewVideoLink);
    }
    $scope.module3OpenSpeakerVideo = function (talkId) {         
        $scope.module3Video = _.filter($scope.module3List.List, function (d) { return d.TalkId === talkId; });   
        $window.open($scope.module3Video[0].PreViewVideoLink);
    }
    $scope.module4OpenSpeakerVideo = function (talkId) {         
        $scope.module4Video = _.filter($scope.module4List.List, function (d) { return d.TalkId === talkId; });   
        $window.open($scope.module4Video[0].PreViewVideoLink);
    }
    $scope.module5OpenSpeakerVideo = function (talkId) {         
        $scope.module5Video = _.filter($scope.module5List.List, function (d) { return d.TalkId === talkId; });   
        $window.open($scope.module5Video[0].PreViewVideoLink);
    }
    $scope.module6OpenSpeakerVideo = function (talkId) {         
        $scope.module6Video = _.filter($scope.module6List.List, function (d) { return d.TalkId === talkId; });   
        $window.open($scope.module6Video[0].PreViewVideoLink);
    }
    $scope.module7OpenSpeakerVideo = function (talkId) {         
        $scope.module7Video = _.filter($scope.module7List.List, function (d) { return d.TalkId === talkId; });   
        $window.open($scope.module7Video[0].PreViewVideoLink);
    }
    $scope.module8OpenSpeakerVideo = function (talkId) {         
        $scope.module8Video = _.filter($scope.module8List.List, function (d) { return d.TalkId === talkId; });   
        $window.open($scope.module8Video[0].PreViewVideoLink);
    }
    $scope.module9OpenSpeakerVideo = function (talkId) {         
        $scope.module9Video = _.filter($scope.module9List.List, function (d) { return d.TalkId === talkId; });   
        $window.open($scope.module9Video[0].PreViewVideoLink);
    }
    $scope.module10OpenSpeakerVideo = function (talkId) {         
        $scope.module10Video = _.filter($scope.module10List.List, function (d) { return d.TalkId === talkId; });   
        $window.open($scope.module10Video[0].PreViewVideoLink);
    }
    $scope.module11OpenSpeakerVideo = function (talkId) {         
        $scope.module11Video = _.filter($scope.module11List.List, function (d) { return d.TalkId === talkId; });   
        $window.open($scope.module11Video[0].PreViewVideoLink);
    }
    $scope.module12OpenSpeakerVideo = function (talkId) {         
        $scope.module12Video = _.filter($scope.module12List.List, function (d) { return d.TalkId === talkId; });   
        $window.open($scope.module12Video[0].PreViewVideoLink);
    }

    $scope.goToLogin = function () {
        $state.go('signIn');
    }


    $(window).on('popstate', function (e) {
        $('#video-ID1').modal('dismiss');
        $('body').removeClass('modal-open');
    });

    //model close 
    $(function () {
        $('.modal').on('hidden.bs.modal', function (e) {           
            $("#myIframe1").attr('src', '');
        });
    });

    $scope.module1List = {
                    "List" :[
                            {
                                "TalkId" : "1",
                                "TalkName": "Methodology (TAS & TVS) and Tricks to Scan the Pelvis",
                                "SpeakerName": "Dr. Mala Sibal",
                                "Cost": "2000",
                                "Duration": "50 min",
                                "Talkdesc": "Transabdominal and transvaginal scan: Basics, methodology, various signs, maneuvers, tips and tricks of scanning the pelvis.",
                                "PreViewVideoLink": "https://gynac.ccavenue.com/stores/prl/gynac,34177",
                            },

                            {
                                "TalkId": "2",
                                "TalkName": "Ultrasound Settings and Technique",
                                "SpeakerName": "Dr. Sonal Panchal",
                                "Cost": "2000",
                                "Duration": "50 min",
                                "Talkdesc": "Ultrasound settings: Fine tuning of machine settings and various parameters to optimize pelvic imaging",
                                "PreViewVideoLink": "https://gynac.ccavenue.com/stores/prl/gynac,34178",
                            },

                            {
                                "TalkId": "3",
                                "TalkName": "Doppler in Gynecology",
                                "SpeakerName": "Dr. Mala Sibal",
                                "Cost": "3000",
                                "Duration": "1 hr 15 min",
                                "Talkdesc": "Doppler: Types, Settings, Colour Scoring, 3D Doppler, advantages and utility in various case scenarios including, malignancies , torsion etc.",
                                "PreViewVideoLink": "https://gynac.ccavenue.com/stores/prl/gynac,34179",
                            },

                            {
                                "TalkId": "4",
                                "TalkName": "Three Dimensional Ultrasound in Gynecology",
                                "SpeakerName": "Dr. Mala Sibal",
                                "Cost": "3500",
                                "Duration": "1 hr 36 min",
                                "Talkdesc": "3D Ultrasound: Basics concepts, advantages, steps involved in 3D imaging, utility in various gynecological conditions using various display modes",
                                "PreViewVideoLink": "https://gynac.ccavenue.com/stores/prl/gynac,34180",
                            },


                            {
                                "TalkId": "5",
                                "TalkName": "Enhanced Ultrasound Techniques (Gel Sonovaginography & Sonohysterography)",
                                "SpeakerName": "Dr. Mala Sibal",
                                "Cost": "2300",
                                "Duration": "57 min",
                                "Talkdesc": "Gel Sonovaginography & Sonohysterography: Utility, methodology, advantages, limitations and application in various condition",
                                "PreViewVideoLink": "https://gynac.ccavenue.com/stores/prl/gynac,34181",
                            },
                    ]
    };
    $scope.module2List = {
                    "List" :[
                            {
                                "TalkId": "6",
                                "TalkName": "Evaluation of Myometrium & Normal Myometrium",
                                "SpeakerName": "Dr. Mala Sibal",
                                "Cost": "1500",
                                "Duration": "23 min",
                                "Talkdesc": "Evaluation of the uterine myometrium (primarily based on MUSA consensus statement): methodology, measurements, and qualitative assessment of normal and pathological lesions, junctional zone and normal variations.",
                                "PreViewVideoLink": "https://gynac.ccavenue.com/stores/prl/gynac,34182",
                            },
                            {
                                "TalkId": "7",
                                "TalkName": "Fibroid (Leiomyoma) & Sarcoma",
                                "SpeakerName": "Dr. Mala Sibal",
                                "Cost": "2300",
                                "Duration": "58 min",
                                "Talkdesc": "Fibroids & Sarcoma: Ultrasound appearance & Doppler, fibroid mapping, 3D rendering, various cases of fibroids-large subserous, submucous and atypical cases. Red degeneration, fibroid embolization, diffuse uterine leiomyomatosis and disseminated peritoneal leiomyomatosis and the rare sarcoma",
                                "PreViewVideoLink": "https://gynac.ccavenue.com/stores/prl/gynac,34183",
                            },

                            {
                                "TalkId": "8",
                                "TalkName": "Adenomyosis and Adenomyoma",
                                "SpeakerName": "Dr. Mala Sibal",
                                "Cost": "1800",
                                "Duration": "32 min",
                                "Talkdesc": "Adenomyosis: Basic pathology and junctional zone involvement, variety of ultrasound appearance on 2D and 3D, subtle adenomyosis, posterior wall adenomyosis, adenomyosis secondary to obstruction, adenomyomas and differentiation from fibroids.",
                                "PreViewVideoLink": "https://gynac.ccavenue.com/stores/prl/gynac,34184",
                            },
                    ]
    };
    $scope.module3List = {
                    "List" :[
                            {
                                "TalkId": "9",
                                "TalkName": "Congenital Uterine Anomalies",
                                "SpeakerName": "Dr. Mala Sibal",
                                "Cost": "2000",
                                "Duration": "26 min",
                                "Talkdesc": "Congenital Uterine Anomalies: Embryopathogenesis and classification, approach to diagnosis, types of uterine anomalies, cervical & vaginal anomalies, hematocolpos and reporting of anomalies.",
                                "PreViewVideoLink": "https://gynac.ccavenue.com/stores/prl/gynac,34185",
                            },
                    ]
    };
    $scope.module4List = {
                    "List" :[
                            {
                                "TalkId": "10",
                                "TalkName": "Evaluation of Endometrium & Normal Endometrium",
                                "SpeakerName": "Dr. Mala Sibal",
                                "Cost": "1500",
                                "Duration": "36 min",
                                "Talkdesc": "Evaluation of the endometrium (primarily based on IETA consensus statement): methodology, measurements, qualitative assessment of normal and pathological lesions, Doppler evaluation, sonohysterogram and normal variations.",
                                "PreViewVideoLink": "https://gynac.ccavenue.com/stores/prl/gynac,34186",
                            },
                            
                            
                            {
                                "TalkId": "11",
                                "TalkName": "Endometrial Pathologies 1 - Polyps",
                                "SpeakerName": "Dr. Mala Sibal",
                                "Cost": "2000",
                                "Duration": "50 min",
                                "Talkdesc": "Endometrial polyps: Appearance and diagnosis with 2D, 3D, Doppler & SHG, atypical polyps, artefacts and malignant polyps.",
                                "PreViewVideoLink": "https://gynac.ccavenue.com/stores/prl/gynac,34187",
                            },
                            
                            {
                                "TalkId": "12",
                                "TalkName": "Endometrial Pathologies 2 - Hyperplasia & Carcinoma",
                                "SpeakerName": "Dr. Mala Sibal",
                                "Cost": "3200",
                                "Duration": "1 hr 53 min",
                                "Talkdesc": "Endometrial Hyperplasia: Ultrasound appearance, Doppler & SHG, atypical hyperplasia and tamoxifen endometrium; Endometrial carcinoma: Ultrasound appearance on 2D, Doppler, 3D & 3D Doppler, ultrasound limitations, myometrial invasion, metastasis, atypical cases, malignant polyps; Differential diagnosis of thickened endometrium",
                                "PreViewVideoLink": "https://gynac.ccavenue.com/stores/prl/gynac,34188",
                            },

 
                            {
                                "TalkId": "13",
                                "TalkName": "Endometrial Pathologies 3",
                                "SpeakerName": "Dr. Mala Sibal",
                                "Cost": "1800",
                                "Duration": "41 min",
                                "Talkdesc": "Asherman’s Syndrome and sub-endometrial fibrosis: appearance and diagnosis on 2D & 3D.  Endometritis, intrauterine infection (including post-partum) and intracavitory fluid in uterus.",
                                "PreViewVideoLink": "https://gynac.ccavenue.com/stores/prl/gynac,34189",
                            },
                    ]
    };
    $scope.module5List = {
                    "List" :[
                            {
                                "TalkId": "14",
                                "TalkName": "Ultrasound in Polycystic Ovarian Syndrome",
                                "SpeakerName": "Dr. Sonal Panchal",
                                "Cost": "2000",
                                "Duration": "43 min",
                                "Talkdesc": "Ultrasound criteria for diagnosis of polycystic ovaries. Stromal abundance and stromal vascularity for diagnosis & methods to establish stromal abundance. Correlation of hormonal & ultrasound features. Understanding and diagnosis of PCOS is logically explained in a simple, interesting and informative manner.",
                                "PreViewVideoLink": "https://gynac.ccavenue.com/stores/prl/gynac,34190",
                            },


                            {
                                "TalkId": "15",
                                "TalkName": "Cycle Assessment in Infertility and ART",
                                "SpeakerName": "Dr. Sonal Panchal",
                                "Cost": "2300",
                                "Duration": "1 hr 4 min",
                                "Talkdesc": "This presentation is about the monitoring of the fertility treatment cycles. It discusses the role of advanced ultrasound technologies like Doppler and 3D ultrasound for the diagnosis of low reserve, poor responders and polycystic ovarian syndrome patients and to decide the stimulation protocols. Evaluating the follicle & the endometrium in the preovulatory phase, luteal phase assessment and correlation of ultrasound findings with the hormonal status of the female during natural and treatment cycle has been dealt with.",
                                "PreViewVideoLink": "https://gynac.ccavenue.com/stores/prl/gynac,34191",
                            },


                            {
                                "TalkId": "16",
                                "TalkName": "Tubal Assessment",
                                "SpeakerName": "Dr. Sonal Panchal",
                                "Cost": "1500",
                                "Duration": "34 min",
                                "Talkdesc": "This talk deals with various ultrasound based tests used for assessment of not only the tubal anatomically patency but also the functional integrity. Saline infusion salpingography with colour & pulse Doppler and positive contrast ( Hystero-contrast salpingography) HyCosy with volume ultrasound have been discussed.",
                                "PreViewVideoLink": "https://gynac.ccavenue.com/stores/prl/gynac,34192",
                            },


                            {
                                "TalkId": "17",
                                "TalkName": "Oocyte Retrieval and Embryo Transfer",
                                "SpeakerName": "Dr. Sonal Panchal",
                                "Cost": "2000",
                                "Duration": "46 min",
                                "Talkdesc": "Description of both procedures that are done under ultrasound guidance is discussed in detail. This includes the pre-procedure preparation, anesthetic technique, minute details and practical tips of for both oocyte retrieval and embryo transfer techniques. Variations in the techniques and controversies are also discussed. The clips of the procedure on ultrasound screen illustrates the entire technique clear enough to practice. ",
                                "PreViewVideoLink": "https://gynac.ccavenue.com/stores/prl/gynac,34193",
                            },
                    ]
    };
    $scope.module6List = {
                    "List" :[
                            {
                                "TalkId": "18",
                                "TalkName": "Ultrasound Evaluation of Cervix",
                                "SpeakerName": "Dr. Mala Sibal",
                                "Cost": "3000",
                                "Duration": "1 hr 29 min",
                                "Talkdesc": "Cervix: Normal cervix, evaluation of cervix on TVS along with tips to optimize imaging, evaluation of benign and malignant cervical pathology on 2D Doppler, 3D, 3D Doppler and gel sonovaginography",
                                "PreViewVideoLink": "https://gynac.ccavenue.com/stores/prl/gynac,34194",
                            },


                            {
                                "TalkId": "19",
                                "TalkName": "Ultrasound Evaluation of Vagina",
                                "SpeakerName": "Dr. Mala Sibal",
                                "Cost": "2500",
                                "Duration": "1 hr 7 min",
                                "Talkdesc": "Vagina: Evaluation of benign and malignant vaginal pathology on 2D Doppler, 3D, and gel sonovaginography. Brief note on vulval carcinoma.",
                                "PreViewVideoLink": "https://gynac.ccavenue.com/stores/prl/gynac,34195",
                            },
                    ]
    };
    $scope.module7List = {
                    "List" :[
                            {
                                "TalkId": "20",
                                "TalkName": "Evaluation of Normal Ovaries",
                                "SpeakerName": "Dr. Mala Sibal",
                                "Cost": "1500",
                                "Duration": "33 min",
                                "Talkdesc": "Short talk on how to look and assess normal ovaries in various age groups",
                                "PreViewVideoLink": "https://gynac.ccavenue.com/stores/prl/gynac,34196",
                            },

                            {
                                "TalkId": "21",
                                "TalkName": "Evaluation of Ovarian & Adnexal Pathology (based on IOTA Guidelines)",
                                "SpeakerName": "Dr. Mala Sibal",
                                "Cost": "2000",
                                "Duration": "45 min",
                                "Talkdesc": "Evaluation of the ovarian & adnexal lesions (primarily based on IOTA recommendations): Measurements, terminology, Doppler assessment, morphological classification, description, determining origin of masses, simple rules,  simple descriptors, and 3 stage approach to evaluating adnexal masses",
                                "PreViewVideoLink": "https://gynac.ccavenue.com/stores/prl/gynac,34197",
                            },

                            {
                                "TalkId": "22",
                                "TalkName": "Ovarian Masses & Spectrum of Ovarian Neoplasia - Part 1",
                                "SpeakerName": "Dr. Mala Sibal",
                                "Cost": "1500",
                                "Duration": "21 min",
                                "Talkdesc": "Ovarian masses: Determining ovarian origin, physiological masses, endometriomas (including associated malignancy & decidualized cysts) and other non-neoplastic ovarian masses.",
                                "PreViewVideoLink": "https://gynac.ccavenue.com/stores/prl/gynac,34198",
                            },

                            {
                                "TalkId": "23",
                                "TalkName": "Ovarian Masses & Spectrum of Ovarian Neoplasia - Part 2",
                                "SpeakerName": "Dr. Mala Sibal",
                                "Cost": "2500",
                                "Duration": "43 min",
                                "Talkdesc": "Spectrum of epithelial ovarian neoplasia (benign, borderline & malignant) – multiple cases with confirmed pathologies",
                                "PreViewVideoLink": "https://gynac.ccavenue.com/stores/prl/gynac,34199",
                            },

                            {
                                "TalkId": "24",
                                "TalkName": "Ovarian Masses & Spectrum of Ovarian Neoplasia - Part 3",
                                "SpeakerName": "Dr. Mala Sibal",
                                "Cost": "2500",
                                "Duration": "51 min",
                                "Talkdesc": "Spectrum of non-epithelial ovarian neoplasia (germ cell, stromal & metastatic tumors) – multiple cases of these rare tumors with confirmed pathologies",
                                "PreViewVideoLink": "https://gynac.ccavenue.com/stores/prl/gynac,34200",
                            },
                    ]
    };
    $scope.module8List = {
                    "List" :[
                            {
                                "TalkId": "25",
                                "TalkName": "Non Ovarian Adnexal Pathology – Part 1",
                                "SpeakerName": "Dr. Mala Sibal",
                                "Cost": "2800",
                                "Duration": "1 hr 3 min",
                                "Talkdesc": "Tubal pathology & PID: acute PID, pyosalpinx, tubo-ovarian masses, hydrosalpinx, tuberculosis and cases of fallopian tube carcinoma.",
                                "PreViewVideoLink": "https://gynac.ccavenue.com/stores/prl/gynac,34201",
                            },

                            {
                                "TalkId": "26",
                                "TalkName": "Non Ovarian Adnexal Pathology – Part 2",
                                "SpeakerName": "Dr. Mala Sibal",
                                "Cost": "1800",
                                "Duration": "36 min",
                                "Talkdesc": "Non-tubal & non-ovarian adnexal pathology: Paraovarian cysts (including atypical ones), peritoneal inclusion cysts (along with tips for diagnosis) and other rare cases.",
                                "PreViewVideoLink": "https://gynac.ccavenue.com/stores/prl/gynac,34202",
                            },

                            {
                                "TalkId": "27",
                                "TalkName": "Practice - Evaluation of Ovarian & Adnexal Pathology (based on IOTA Guidelines)",
                                "SpeakerName": "Dr. Mala Sibal",
                                "Cost": "3000",
                                "Duration": "1 hr 7 min",
                                "Talkdesc": "This is an interesting practice session of evaluation of adnexal masses into benign or malignant after a quick revision of morphological classification, simple descriptors, simple rules and the 3 stage approach. There are multiple cases with sufficient intervening gap during the talk for the candidates to individually, logical evaluate and decide whether a mass is malignant or not.",
                                "PreViewVideoLink": "https://gynac.ccavenue.com/stores/prl/gynac,34203",
                            },
                    ]
    };
    $scope.module9List = {
                    "List" :[
                            {
                                "TalkId": "28",
                                "TalkName": "Endometriosis Including Deep Infiltrating & Extra-Pelvic Endometriosis",
                                "SpeakerName": "Dr. Mala Sibal",
                                "Cost": "2500",
                                "Duration": "45 min",
                                "Talkdesc": "Endometriosis: Endometriomas revised, spectrum of deep infiltrating endometriosis – of bowel, bladder, uterosacral, ureters, vagina, & cervix, scar endometriosis and extra-pelvic thoracic & abdominal endometriosis.",
                                "PreViewVideoLink": "https://gynac.ccavenue.com/stores/prl/gynac,34204",
                            },
                    ]
    };
    $scope.module10List = {
                    "List" :[
                            {
                                "TalkId": "29",
                                "TalkName": "Normal and Abnormal Early Pregnancy",
                                "SpeakerName": "Dr. Sonal Panchal",
                                "Cost": "3000",
                                "Duration": "48 min",
                                "Talkdesc": "Development and abnormalities of first 10-11 weeks of pregnancy. Embryonic development studied on ultrasound in B-mode & 3D, abnormalities that can be picked up so early in pregnancy and prognostic markers of pregnancy outcome in the first trimester",
                                "PreViewVideoLink": "https://gynac.ccavenue.com/stores/prl/gynac,34205",
                            },

                            {
                                "TalkId": "30",
                                "TalkName": "Spectrum of Ectopic Pregnancies and PUL",
                                "SpeakerName": "Dr. Mala Sibal",
                                "Cost": "3000",
                                "Duration": "1 hr 2 min",
                                "Talkdesc": "Locating the pregnancy: Brief description of intra uterine possibilities, spectrum of ectopics – tubal, ovarian, interstitial, cornual, cervical, heterotropic, intramyometrial & scar ectopic and pregnancy of unknown location and their evaluation ",
                                "PreViewVideoLink": "https://gynac.ccavenue.com/stores/prl/gynac,34206",
                            },

                            {
                                "TalkId": "31",
                                "TalkName": "Retained Products of Conception",
                                "SpeakerName": "Dr. Mala Sibal",
                                "Cost": "2000",
                                "Duration": "42 min",
                                "Talkdesc": "Retained products of conception: variable ultrasound appearance on 2D and Doppler and retained placenta",
                                "PreViewVideoLink": "https://gynac.ccavenue.com/stores/prl/gynac,34207",
                            },

                            {
                                "TalkId": "32",
                                "TalkName": "Gestational Trophoblastic Disease",
                                "SpeakerName": "Dr. Mala Sibal",
                                "Cost": "2500",
                                "Duration": "51 min",
                                "Talkdesc": "Spectrum of GTD: molar pregnancy including partial mole and gestational trophoblastic neoplasia (Invasive mole, choriocarcinoma etc)",
                                "PreViewVideoLink": "https://gynac.ccavenue.com/stores/prl/gynac,34208",
                            },
                    ]
    };
    $scope.module11List = {
                    "List" :[
                            {
                                "TalkId": "33",
                                "TalkName": "Torsion (Ovarian & Non-Ovarian)",
                                "SpeakerName": "Dr. Mala Sibal",
                                "Cost": "2000",
                                "Duration": "27 min",
                                "Talkdesc": "Ovarian torsion: Non-specific and the three specific classic features for diagnosis of torsion (including the whirlpool & follicular ring sign).  Non-ovarian torsion: of hydrosalpinx and paraovarian cyst",
                                "PreViewVideoLink": "https://gynac.ccavenue.com/stores/prl/gynac,34209",
                            },

                            {
                                "TalkId": "34",
                                "TalkName": "Differential Diagnosis of Acute Pelvic Pain",
                                "SpeakerName": "Dr. Mala Sibal",
                                "Cost": "2500",
                                "Duration": "54 min",
                                "Talkdesc": "Differential diagnosis of acute pelvic pain: An overview of causes (Hemorrhage from CL, infection, ectopic, torsion, dysmenorrhea etc)",
                                "PreViewVideoLink": "https://gynac.ccavenue.com/stores/prl/gynac,34210",
                            },
                    ]
    };
    $scope.module12List = {
                    "List" :[
                            {
                                "TalkId": "35",
                                "TalkName": "Uterine Vascular Malformations",
                                "SpeakerName": "Dr. Mala Sibal",
                                "Cost": "1800",
                                "Duration": "28 min",
                                "Talkdesc": "AV malformations: their diagnosis, true A V malformations and differential diagnosis of vascular uterine lesions",
                                "PreViewVideoLink": "https://gynac.ccavenue.com/stores/prl/gynac,34211",
                            },

                            {
                                "TalkId": "36",
                                "TalkName": "Uterine Perforation & Uterovesical Fistula",
                                "SpeakerName": "Dr. Mala Sibal",
                                "Cost": "1800",
                                "Duration": "28 min",
                                "Talkdesc": "Various cases of uterine perforation – At surgery, by IUCD and trophoblastic invasion. Also a  case of utero-vesical fistula",
                                "PreViewVideoLink": "https://gynac.ccavenue.com/stores/prl/gynac,34212",
                            },

                            {
                                "TalkId": "37",
                                "TalkName": "Caesarean Scar Defect & Retroflexed Uterus",
                                "SpeakerName": "Dr. Mala Sibal",
                                "Cost": "1800",
                                "Duration": "33 min",
                                "Talkdesc": "Caesarean scar defect: ultrasound appearance diagnosis, measurements and symptoms Retroflexed uterus: causes and effects",
                                "PreViewVideoLink": "https://gynac.ccavenue.com/stores/prl/gynac,34213",
                            },

                            {
                                "TalkId": "38",
                                "TalkName": "Intrauterine Contraceptive Device",
                                "SpeakerName": "Dr. Mala Sibal",
                                "Cost": "1500",
                                "Duration": "29 min",
                                "Talkdesc": "Intrauterine Contraceptive Device: Types and their appearance – on 2D & 3D. Displaced IUCD, IUCD perforation and associated infection  ",
                                "PreViewVideoLink": "https://gynac.ccavenue.com/stores/prl/gynac,34214",
                            },
                    ]
    };
    
    /*$scope.freeTalkList = {
                    "List" :[
                            {
                                "TalkId" : "1",
                                "TalkName": "Methodology (TAS & TVS) and Tricks to Scan the Pelvis",
                                "SpeakerName": "Dr. Mala Sibal",
                                "Cost": "2000",
                                "Duration": "50 min",
                                "Talkdesc": "Transabdominal and transvaginal scan: Basics, methodology, various signs, maneuvers, tips and tricks of scanning the pelvis.",
                                "PreViewVideoLink": "https://gynac.ccavenue.com/stores/prl/gynac,34177",
                            },

                            {
                                "TalkId": "2",
                                "TalkName": "Ultrasound Settings and Technique",
                                "SpeakerName": "Dr. Sonal Panchal",
                                "Cost": "2000",
                                "Duration": "50 min",
                                "Talkdesc": "Ultrasound settings: Fine tuning of machine settings and various parameters to optimize pelvic imaging",
                                "PreViewVideoLink": "https://gynac.ccavenue.com/stores/prl/gynac,34178",
                            },

                            {
                                "TalkId": "3",
                                "TalkName": "Doppler in Gynecology",
                                "SpeakerName": "Dr. Mala Sibal",
                                "Cost": "3000",
                                "Duration": "1 hr 15 min",
                                "Talkdesc": "Doppler: Types, Settings, Colour Scoring, 3D Doppler, advantages and utility in various case scenarios including, malignancies , torsion etc.",
                                "PreViewVideoLink": "https://gynac.ccavenue.com/stores/prl/gynac,34179",
                            },

                            {
                                "TalkId": "4",
                                "TalkName": "Three Dimensional Ultrasound in Gynecology",
                                "SpeakerName": "Dr. Mala Sibal",
                                "Cost": "3500",
                                "Duration": "1 hr 36 min",
                                "Talkdesc": "3D Ultrasound: Basics concepts, advantages, steps involved in 3D imaging, utility in various gynecological conditions using various display modes",
                                "PreViewVideoLink": "https://gynac.ccavenue.com/stores/prl/gynac,34180",
                            },


                            {
                                "TalkId": "5",
                                "TalkName": "Enhanced Ultrasound Techniques (Gel Sonovaginography & Sonohysterography)",
                                "SpeakerName": "Dr. Mala Sibal",
                                "Cost": "2300",
                                "Duration": "57 min",
                                "Talkdesc": "Gel Sonovaginography & Sonohysterography: Utility, methodology, advantages, limitations and application in various condition",
                                "PreViewVideoLink": "https://gynac.ccavenue.com/stores/prl/gynac,34181",
                            },

                          
                            {
                                "TalkId": "6",
                                "TalkName": "Evaluation of Myometrium & Normal Myometrium",
                                "SpeakerName": "Dr. Mala Sibal",
                                "Cost": "1500",
                                "Duration": "23 min",
                                "Talkdesc": "Evaluation of the uterine myometrium (primarily based on MUSA consensus statement): methodology, measurements, and qualitative assessment of normal and pathological lesions, junctional zone and normal variations.",
                                "PreViewVideoLink": "https://gynac.ccavenue.com/stores/prl/gynac,34182",
                            },
                            {
                                "TalkId": "7",
                                "TalkName": "Fibroid (Leiomyoma) & Sarcoma",
                                "SpeakerName": "Dr. Mala Sibal",
                                "Cost": "2300",
                                "Duration": "58 min",
                                "Talkdesc": "Fibroids & Sarcoma: Ultrasound appearance & Doppler, fibroid mapping, 3D rendering, various cases of fibroids-large subserous, submucous and atypical cases. Red degeneration, fibroid embolization, diffuse uterine leiomyomatosis and disseminated peritoneal leiomyomatosis and the rare sarcoma",
                                "PreViewVideoLink": "https://gynac.ccavenue.com/stores/prl/gynac,34183",
                            },

                            {
                                "TalkId": "8",
                                "TalkName": "Adenomyosis and Adenomyoma",
                                "SpeakerName": "Dr. Mala Sibal",
                                "Cost": "1800",
                                "Duration": "32 min",
                                "Talkdesc": "Adenomyosis: Basic pathology and junctional zone involvement, variety of ultrasound appearance on 2D and 3D, subtle adenomyosis, posterior wall adenomyosis, adenomyosis secondary to obstruction, adenomyomas and differentiation from fibroids.",
                                "PreViewVideoLink": "https://gynac.ccavenue.com/stores/prl/gynac,34184",
                            },
                            {
                                "TalkId": "9",
                                "TalkName": "Congenital Uterine Anomalies",
                                "SpeakerName": "Dr. Mala Sibal",
                                "Cost": "2000",
                                "Duration": "26 min",
                                "Talkdesc": "Congenital Uterine Anomalies: Embryopathogenesis and classification, approach to diagnosis, types of uterine anomalies, cervical & vaginal anomalies, hematocolpos and reporting of anomalies.",
                                "PreViewVideoLink": "https://gynac.ccavenue.com/stores/prl/gynac,34185",
                            },

                            {
                                "TalkId": "10",
                                "TalkName": "Evaluation of Endometrium & Normal Endometrium",
                                "SpeakerName": "Dr. Mala Sibal",
                                "Cost": "1500",
                                "Duration": "36 min",
                                "Talkdesc": "Evaluation of the endometrium (primarily based on IETA consensus statement): methodology, measurements, qualitative assessment of normal and pathological lesions, Doppler evaluation, sonohysterogram and normal variations.",
                                "PreViewVideoLink": "https://gynac.ccavenue.com/stores/prl/gynac,34186",
                            },
                            
                            
                            {
                                "TalkId": "11",
                                "TalkName": "Endometrial Pathologies 1 - Polyps",
                                "SpeakerName": "Dr. Mala Sibal",
                                "Cost": "2000",
                                "Duration": "50 min",
                                "Talkdesc": "Endometrial polyps: Appearance and diagnosis with 2D, 3D, Doppler & SHG, atypical polyps, artefacts and malignant polyps.",
                                "PreViewVideoLink": "https://gynac.ccavenue.com/stores/prl/gynac,34187",
                            },
                            
                            {
                                "TalkId": "12",
                                "TalkName": "Endometrial Pathologies 2 - Hyperplasia & Carcinoma",
                                "SpeakerName": "Dr. Mala Sibal",
                                "Cost": "3200",
                                "Duration": "1 hr 53 min",
                                "Talkdesc": "Endometrial Hyperplasia: Ultrasound appearance, Doppler & SHG, atypical hyperplasia and tamoxifen endometrium; Endometrial carcinoma: Ultrasound appearance on 2D, Doppler, 3D & 3D Doppler, ultrasound limitations, myometrial invasion, metastasis, atypical cases, malignant polyps; Differential diagnosis of thickened endometrium",
                                "PreViewVideoLink": "https://gynac.ccavenue.com/stores/prl/gynac,34188",
                            },

 
                            {
                                "TalkId": "13",
                                "TalkName": "Endometrial Pathologies 3",
                                "SpeakerName": "Dr. Mala Sibal",
                                "Cost": "1800",
                                "Duration": "41 min",
                                "Talkdesc": "Asherman’s Syndrome and sub-endometrial fibrosis: appearance and diagnosis on 2D & 3D.  Endometritis, intrauterine infection (including post-partum) and intracavitory fluid in uterus.",
                                "PreViewVideoLink": "https://gynac.ccavenue.com/stores/prl/gynac,34189",
                            },


                            {
                                "TalkId": "14",
                                "TalkName": "Ultrasound in Polycystic Ovarian Syndrome",
                                "SpeakerName": "Dr. Sonal Panchal",
                                "Cost": "2000",
                                "Duration": "43 min",
                                "Talkdesc": "Ultrasound criteria for diagnosis of polycystic ovaries. Stromal abundance and stromal vascularity for diagnosis & methods to establish stromal abundance. Correlation of hormonal & ultrasound features. Understanding and diagnosis of PCOS is logically explained in a simple, interesting and informative manner.",
                                "PreViewVideoLink": "https://gynac.ccavenue.com/stores/prl/gynac,34190",
                            },


                            {
                                "TalkId": "15",
                                "TalkName": "Cycle Assessment in Infertility and ART",
                                "SpeakerName": "Dr. Sonal Panchal",
                                "Cost": "2300",
                                "Duration": "1 hr 4 min",
                                "Talkdesc": "This presentation is about the monitoring of the fertility treatment cycles. It discusses the role of advanced ultrasound technologies like Doppler and 3D ultrasound for the diagnosis of low reserve, poor responders and polycystic ovarian syndrome patients and to decide the stimulation protocols. Evaluating the follicle & the endometrium in the preovulatory phase, luteal phase assessment and correlation of ultrasound findings with the hormonal status of the female during natural and treatment cycle has been dealt with.",
                                "PreViewVideoLink": "https://gynac.ccavenue.com/stores/prl/gynac,34191",
                            },


                            {
                                "TalkId": "16",
                                "TalkName": "Tubal Assessment",
                                "SpeakerName": "Dr. Sonal Panchal",
                                "Cost": "1500",
                                "Duration": "34 min",
                                "Talkdesc": "This talk deals with various ultrasound based tests used for assessment of not only the tubal anatomically patency but also the functional integrity. Saline infusion salpingography with colour & pulse Doppler and positive contrast ( Hystero-contrast salpingography) HyCosy with volume ultrasound have been discussed.",
                                "PreViewVideoLink": "https://gynac.ccavenue.com/stores/prl/gynac,34192",
                            },


                            {
                                "TalkId": "17",
                                "TalkName": "Oocyte Retrieval and Embryo Transfer",
                                "SpeakerName": "Dr. Sonal Panchal",
                                "Cost": "2000",
                                "Duration": "46 min",
                                "Talkdesc": "Description of both procedures that are done under ultrasound guidance is discussed in detail. This includes the pre-procedure preparation, anesthetic technique, minute details and practical tips of for both oocyte retrieval and embryo transfer techniques. Variations in the techniques and controversies are also discussed. The clips of the procedure on ultrasound screen illustrates the entire technique clear enough to practice. ",
                                "PreViewVideoLink": "https://gynac.ccavenue.com/stores/prl/gynac,34193",
                            },


                            {
                                "TalkId": "18",
                                "TalkName": "Ultrasound Evaluation of Cervix",
                                "SpeakerName": "Dr. Mala Sibal",
                                "Cost": "3000",
                                "Duration": "1 hr 29 min",
                                "Talkdesc": "Cervix: Normal cervix, evaluation of cervix on TVS along with tips to optimize imaging, evaluation of benign and malignant cervical pathology on 2D Doppler, 3D, 3D Doppler and gel sonovaginography",
                                "PreViewVideoLink": "https://gynac.ccavenue.com/stores/prl/gynac,34194",
                            },


                            {
                                "TalkId": "19",
                                "TalkName": "Ultrasound Evaluation of Vagina",
                                "SpeakerName": "Dr. Mala Sibal",
                                "Cost": "2500",
                                "Duration": "1 hr 7 min",
                                "Talkdesc": "Vagina: Evaluation of benign and malignant vaginal pathology on 2D Doppler, 3D, and gel sonovaginography. Brief note on vulval carcinoma.",
                                "PreViewVideoLink": "https://gynac.ccavenue.com/stores/prl/gynac,34195",
                            },


                            {
                                "TalkId": "20",
                                "TalkName": "Evaluation of Normal Ovaries",
                                "SpeakerName": "Dr. Mala Sibal",
                                "Cost": "1500",
                                "Duration": "33 min",
                                "Talkdesc": "Short talk on how to look and assess normal ovaries in various age groups",
                                "PreViewVideoLink": "https://gynac.ccavenue.com/stores/prl/gynac,34196",
                            },

                            {
                                "TalkId": "21",
                                "TalkName": "Evaluation of Ovarian & Adnexal Pathology (based on IOTA Guidelines)",
                                "SpeakerName": "Dr. Mala Sibal",
                                "Cost": "2000",
                                "Duration": "45 min",
                                "Talkdesc": "Evaluation of the ovarian & adnexal lesions (primarily based on IOTA recommendations): Measurements, terminology, Doppler assessment, morphological classification, description, determining origin of masses, simple rules,  simple descriptors, and 3 stage approach to evaluating adnexal masses",
                                "PreViewVideoLink": "https://gynac.ccavenue.com/stores/prl/gynac,34197",
                            },

                            {
                                "TalkId": "22",
                                "TalkName": "Ovarian Masses & Spectrum of Ovarian Neoplasia - Part 1",
                                "SpeakerName": "Dr. Mala Sibal",
                                "Cost": "1500",
                                "Duration": "21 min",
                                "Talkdesc": "Ovarian masses: Determining ovarian origin, physiological masses, endometriomas (including associated malignancy & decidualized cysts) and other non-neoplastic ovarian masses.",
                                "PreViewVideoLink": "https://gynac.ccavenue.com/stores/prl/gynac,34198",
                            },

                            {
                                "TalkId": "23",
                                "TalkName": "Ovarian Masses & Spectrum of Ovarian Neoplasia - Part 2",
                                "SpeakerName": "Dr. Mala Sibal",
                                "Cost": "2500",
                                "Duration": "43 min",
                                "Talkdesc": "Spectrum of epithelial ovarian neoplasia (benign, borderline & malignant) – multiple cases with confirmed pathologies",
                                "PreViewVideoLink": "https://gynac.ccavenue.com/stores/prl/gynac,34199",
                            },

                            {
                                "TalkId": "24",
                                "TalkName": "Ovarian Masses & Spectrum of Ovarian Neoplasia - Part 3",
                                "SpeakerName": "Dr. Mala Sibal",
                                "Cost": "2500",
                                "Duration": "51 min",
                                "Talkdesc": "Spectrum of non-epithelial ovarian neoplasia (germ cell, stromal & metastatic tumors) – multiple cases of these rare tumors with confirmed pathologies",
                                "PreViewVideoLink": "https://gynac.ccavenue.com/stores/prl/gynac,34200",
                            },

                            {
                                "TalkId": "25",
                                "TalkName": "Non Ovarian Adnexal Pathology – Part 1",
                                "SpeakerName": "Dr. Mala Sibal",
                                "Cost": "2800",
                                "Duration": "1 hr 3 min",
                                "Talkdesc": "Tubal pathology & PID: acute PID, pyosalpinx, tubo-ovarian masses, hydrosalpinx, tuberculosis and cases of fallopian tube carcinoma.",
                                "PreViewVideoLink": "https://gynac.ccavenue.com/stores/prl/gynac,34201",
                            },

                            {
                                "TalkId": "26",
                                "TalkName": "Non Ovarian Adnexal Pathology – Part 2",
                                "SpeakerName": "Dr. Mala Sibal",
                                "Cost": "1800",
                                "Duration": "36 min",
                                "Talkdesc": "Non-tubal & non-ovarian adnexal pathology: Paraovarian cysts (including atypical ones), peritoneal inclusion cysts (along with tips for diagnosis) and other rare cases.",
                                "PreViewVideoLink": "https://gynac.ccavenue.com/stores/prl/gynac,34202",
                            },

                            {
                                "TalkId": "27",
                                "TalkName": "Practice - Evaluation of Ovarian & Adnexal Pathology (based on IOTA Guidelines)",
                                "SpeakerName": "Dr. Mala Sibal",
                                "Cost": "3000",
                                "Duration": "1 hr 7 min",
                                "Talkdesc": "This is an interesting practice session of evaluation of adnexal masses into benign or malignant after a quick revision of morphological classification, simple descriptors, simple rules and the 3 stage approach. There are multiple cases with sufficient intervening gap during the talk for the candidates to individually, logical evaluate and decide whether a mass is malignant or not.",
                                "PreViewVideoLink": "https://gynac.ccavenue.com/stores/prl/gynac,34203",
                            },

                            {
                                "TalkId": "28",
                                "TalkName": "Endometriosis Including Deep Infiltrating & Extra-Pelvic Endometriosis",
                                "SpeakerName": "Dr. Mala Sibal",
                                "Cost": "2500",
                                "Duration": "45 min",
                                "Talkdesc": "Endometriosis: Endometriomas revised, spectrum of deep infiltrating endometriosis – of bowel, bladder, uterosacral, ureters, vagina, & cervix, scar endometriosis and extra-pelvic thoracic & abdominal endometriosis.",
                                "PreViewVideoLink": "https://gynac.ccavenue.com/stores/prl/gynac,34204",
                            },

                            {
                                "TalkId": "29",
                                "TalkName": "Normal and Abnormal Early Pregnancy",
                                "SpeakerName": "Dr. Sonal Panchal",
                                "Cost": "3000",
                                "Duration": "48 min",
                                "Talkdesc": "Development and abnormalities of first 10-11 weeks of pregnancy. Embryonic development studied on ultrasound in B-mode & 3D, abnormalities that can be picked up so early in pregnancy and prognostic markers of pregnancy outcome in the first trimester",
                                "PreViewVideoLink": "https://gynac.ccavenue.com/stores/prl/gynac,34205",
                            },

                            {
                                "TalkId": "30",
                                "TalkName": "Spectrum of Ectopic Pregnancies and PUL",
                                "SpeakerName": "Dr. Mala Sibal",
                                "Cost": "3000",
                                "Duration": "1 hr 2 min",
                                "Talkdesc": "Locating the pregnancy: Brief description of intra uterine possibilities, spectrum of ectopics – tubal, ovarian, interstitial, cornual, cervical, heterotropic, intramyometrial & scar ectopic and pregnancy of unknown location and their evaluation ",
                                "PreViewVideoLink": "https://gynac.ccavenue.com/stores/prl/gynac,34206",
                            },

                            {
                                "TalkId": "31",
                                "TalkName": "Retained Products of Conception",
                                "SpeakerName": "Dr. Mala Sibal",
                                "Cost": "2000",
                                "Duration": "42 min",
                                "Talkdesc": "Retained products of conception: variable ultrasound appearance on 2D and Doppler and retained placenta",
                                "PreViewVideoLink": "https://gynac.ccavenue.com/stores/prl/gynac,34207",
                            },

                            {
                                "TalkId": "32",
                                "TalkName": "Gestational Trophoblastic Disease",
                                "SpeakerName": "Dr. Mala Sibal",
                                "Cost": "2500",
                                "Duration": "51 min",
                                "Talkdesc": "Spectrum of GTD: molar pregnancy including partial mole and gestational trophoblastic neoplasia (Invasive mole, choriocarcinoma etc)",
                                "PreViewVideoLink": "https://gynac.ccavenue.com/stores/prl/gynac,34208",
                            },

                            {
                                "TalkId": "33",
                                "TalkName": "Torsion (Ovarian & Non-Ovarian)",
                                "SpeakerName": "Dr. Mala Sibal",
                                "Cost": "2000",
                                "Duration": "27 min",
                                "Talkdesc": "Ovarian torsion: Non-specific and the three specific classic features for diagnosis of torsion (including the whirlpool & follicular ring sign).  Non-ovarian torsion: of hydrosalpinx and paraovarian cyst",
                                "PreViewVideoLink": "https://gynac.ccavenue.com/stores/prl/gynac,34209",
                            },

                            {
                                "TalkId": "34",
                                "TalkName": "Differential Diagnosis of Acute Pelvic Pain",
                                "SpeakerName": "Dr. Mala Sibal",
                                "Cost": "2500",
                                "Duration": "54 min",
                                "Talkdesc": "Differential diagnosis of acute pelvic pain: An overview of causes (Hemorrhage from CL, infection, ectopic, torsion, dysmenorrhea etc)",
                                "PreViewVideoLink": "https://gynac.ccavenue.com/stores/prl/gynac,34210",
                            },

                            {
                                "TalkId": "35",
                                "TalkName": "Uterine Vascular Malformations",
                                "SpeakerName": "Dr. Mala Sibal",
                                "Cost": "1800",
                                "Duration": "28 min",
                                "Talkdesc": "AV malformations: their diagnosis, true A V malformations and differential diagnosis of vascular uterine lesions",
                                "PreViewVideoLink": "https://gynac.ccavenue.com/stores/prl/gynac,34211",
                            },

                            {
                                "TalkId": "36",
                                "TalkName": "Uterine Perforation & Uterovesical Fistula",
                                "SpeakerName": "Dr. Mala Sibal",
                                "Cost": "1800",
                                "Duration": "28 min",
                                "Talkdesc": "Various cases of uterine perforation – At surgery, by IUCD and trophoblastic invasion. Also a  case of utero-vesical fistula",
                                "PreViewVideoLink": "https://gynac.ccavenue.com/stores/prl/gynac,34212",
                            },

                            {
                                "TalkId": "37",
                                "TalkName": "Caesarean Scar Defect & Retroflexed Uterus",
                                "SpeakerName": "Dr. Mala Sibal",
                                "Cost": "1800",
                                "Duration": "33 min",
                                "Talkdesc": "Caesarean scar defect: ultrasound appearance diagnosis, measurements and symptoms Retroflexed uterus: causes and effects",
                                "PreViewVideoLink": "https://gynac.ccavenue.com/stores/prl/gynac,34213",
                            },

                            {
                                "TalkId": "38",
                                "TalkName": "Intrauterine Contraceptive Device",
                                "SpeakerName": "Dr. Mala Sibal",
                                "Cost": "1500",
                                "Duration": "29 min",
                                "Talkdesc": "Intrauterine Contraceptive Device: Types and their appearance – on 2D & 3D. Displaced IUCD, IUCD perforation and associated infection  ",
                                "PreViewVideoLink": "https://gynac.ccavenue.com/stores/prl/gynac,34214",
                            },

                    ]
    };*/

}]);