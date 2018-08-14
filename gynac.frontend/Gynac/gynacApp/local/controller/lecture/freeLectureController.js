app.controller("freeLectureController", ["$scope", "$rootScope", "dataService", "$filter", "$state", "$interval", "$stateParams", "$uibModal", "jwplayer", function ($scope, $rootScope, dataService, $filter, $state, $interval, $stateParams, $uibModal, jwplayer) {

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
    $scope.getTalkOverview = function (talkId) {
        $scope.overViewDetails = _.filter($scope.freeTalkList.List, function (d) { return d.TalkId === talkId; });
        $scope.overviewDisplay = true;
    }

    //pause video
    $scope.pauseVideo = function () {
        var iframe = document.getElementById("myIframe1");
        var player = new Vimeo.Player(iframe);

        player.pause().then(function () {          
        }).catch(function (error) {
            switch (error.name) {
                case 'PasswordError':
                    break;
                case 'PrivacyError':
                    break;
                default:
                    break;
            }
        });
    }

    //open video and previewvideo script
    $scope.openSpeakerVideo = function (talkId) {        
        $scope.talkVideo = _.filter($scope.freeTalkList.List, function (d) { return d.TalkId === talkId; });        
        if ($scope.userId != "0") {
                $scope.display = true;
                document.getElementById('myIframe1').src = $scope.talkVideo[0].PreViewVideoLink;
            }
            else {
                $scope.display = false;                
                document.getElementById('myIframe1').src = "";                
            }
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

    $scope.freeTalkList = {
                    "List" :[
                            {
                                "TalkId" : "1",
                                "TalkName": "Ultrasound in gynaecology oncology",
                                "SpeakerName": "David Cibula",
                                "Duration": "6 min",
                                "Talkdesc": "Ultrasound in gynaecology oncology",
                                "PreViewVideoLink": "https://player.vimeo.com/video/254514515",
                            },

                            {
                                "TalkId": "2",
                                "TalkName": "How to scan Pelvis",
                                "SpeakerName": "Daniela Fischerova",
                                "Duration": "11 min",
                                "Talkdesc": "How to scan Pelvis",
                                "PreViewVideoLink": "https://player.vimeo.com/video/254519167",
                            },

                            {
                                "TalkId": "3",
                                "TalkName": "How to scan abdomen",
                                "SpeakerName": "Daniela Fischerova",
                                "Duration": "16 min",
                                "Talkdesc": "How to scan abdomen",
                                "PreViewVideoLink": "https://player.vimeo.com/video/254520063",
                            },


                            {
                                "TalkId": "4",
                                "TalkName": "Cervical Cancer Staging",
                                "SpeakerName": "Antonia Testa",
                                "Duration": "11 min",
                                "Talkdesc": "Cervical Cancer Staging",
                                "PreViewVideoLink": "https://player.vimeo.com/video/254522009",
                            },

                          

                            {
                                "TalkId": "5",
                                "TalkName": "Endometrial Cancer - Diagnosis and Staging",
                                "SpeakerName": "Elisabeth Epstein",
                                "Duration": "16 min",
                                "Talkdesc": "Endometrial cancer diagnosis and staging",
                                "PreViewVideoLink": "https://player.vimeo.com/video/254523574",
                            },
                            {
                                "TalkId": "6",
                                "TalkName": "Ovarian Cancer Staging",
                                "SpeakerName": "Daniela Fischerova",
                                "Duration": "14 min",
                                "Talkdesc": "Ovarian Cancer Staging",
                                "PreViewVideoLink": "https://player.vimeo.com/video/254525310",
                            },

                            {
                                "TalkId": "7",
                                "TalkName": "Pelvic Carcinomatosis",
                                "SpeakerName": "Daniela Fischerova",
                                "Duration": "3 min",
                                "Talkdesc": "Pelvic Carcinomatosis",
                                "PreViewVideoLink": "https://player.vimeo.com/video/254515260",
                            },
                            {
                                "TalkId": "8",
                                "TalkName": "Upper Abdomen Carcinomatosis",
                                "SpeakerName": "Daniela Fischerova",
                                "Duration": "2 min",
                                "Talkdesc": "Upper Abdomen Carcinomatosis",
                                "PreViewVideoLink": "https://player.vimeo.com/video/254515765",
                            },

                            {
                                "TalkId": "9",
                                "TalkName": "Middle Abdomen Carcinomatosis",
                                "SpeakerName": "Daniela Fischerova",
                                "Duration": "4 min",
                                "Talkdesc": "Middle Abdomen Carcinomatosis",
                                "PreViewVideoLink": "https://player.vimeo.com/video/254516102",
                            },
                            

                            
                            {
                                "TalkId": "10",
                                "TalkName": "Metalastic Lymph Nodes",
                                "SpeakerName": "Daniela Fischerova",
                                "Duration": "3 min",
                                "Talkdesc": "Metalastic Lymph Nodes",
                                "PreViewVideoLink": "https://player.vimeo.com/video/254516972",
                            },
                            
                            {
                                "TalkId": "11",
                                "TalkName": "Tru-Cut Biopsy in Gynecology Oncology",
                                "SpeakerName": "Michal Zikan",
                                "Duration": "17 min",
                                "Talkdesc": "Tru-Cut Biopsy in Gynecology Oncology",
                                "PreViewVideoLink": "https://player.vimeo.com/video/254517638",
                            },


                    ]
    };


}]);