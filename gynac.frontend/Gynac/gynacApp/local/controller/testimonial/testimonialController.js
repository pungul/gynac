app.controller("testimonialController",["$scope", "$rootScope", "dataService", "$state", "$stateParams", "$sce", function($scope, $rootScope, dataService, $state, $stateParams, $sce){
    // Random preview
    
    /*$scope.viewAllTestimonials = function(val){
        $scope.currentPage = val;
    }*/
    $scope.previewLec = $rootScope.speakerVideoList[Math.floor(Math.random() * $rootScope.speakerVideoList.length)];
    
    $scope.testimonial = [


        {
            uaseName : '<div>Dr. Sirisha, Hyderabad</div>',
            text : '<div> ‘The endometrium appears trilaminar on transabdominal scan and echogenic on transvaginal scan – which one’s right?’ ‘Is this uterus didelphys or complete bicornuate bicollis?’ ‘The ovary is not seen: is it obscured by bowel gas or can I somehow improve the visualization?’ The 6-month certification course in ‘Ultrasound in Gynecology’ provided answers to these questions and many more. <br> <br> For close to a decade, I have been on the lookout for such a course. In India, ultrasound training in OBGYN seems to focus only on fetal medicine as evidenced by the myriad obstetric ultrasound courses on offer. So, when this course was launched, I immediately jumped at the opportunity and was not disappointed. <br><br>It is a comprehensive, well-structured program with the right mix of theoretical perspective and clinical case scenarios. One does not have to endure boring didactic lectures and that is a huge plus. The ‘tips and tricks’ offered by the faculty are invaluable and have certainly helped me hone my ultrasound skills. This course has been an eye-opener: decidualized endometriotic cysts, hyperplastic endometrium on progestin therapy, deep infiltrating endometriosis, gel sonography, to name a few.<br><br>Dr Mala’s methodical diagnostic approach, follow-up of patients including the operative findings and histopathologic correlation, is an inspiration to all her students. I marvel at her dedication and passion for teaching. The importance of standard terminology and meticulous reporting has also been emphasized. Dr Sonal’s lectures on ultrasound techniques and infertility were concise and simplified these complex topics. A special note of thanks to the support staff especially Ms Sonya for her prompt assistance and the technical team for uninterrupted streaming.<br><br>The whole learning experience was enriching and enjoyable, and I would recommend this course to all those who wish to excel in pelvic ultrasonography. It is certainly time well-spent.<br><br>Kudos to Dr Mala Sibal, Dr Sonal Panchal and the entire team at Gynecology Academy! Best wishes for a bright future!<br><br></div>',
            
        },
        {
            uaseName : '<div>Dr. Mathangi T., Chennai</div>',
            text: '<div> I deem it a great pleasure that I was part of this course. I consider that over the duration of the course I have gained a lot of knowledge, more precisely a knowledge that will help me in my clinical practice.  At the end of the course each concept has been rooted deep and has given the confidence to handle any case that might approach in the future.<br><br>My sincere thanks to Dr.Mala for not only being an amazing teacher but also an incomparable facilitator. Dr.Mala\'s passion towards the subject is so evident that by the end of the course she ultimately transmits the same to us. The repetition of the key points over and over again has nailed the concept deep in us. Hope to carry forward her legacy and passion to our level best.Dr. Sonal has given us a deep insight of various nuances in the course which we never knew even existed.<br><br>On the whole opportunities knock the door, but golden opportunities knock the door rarely like a golden egg. Hands down I accept this has been a golden opportunity in my career.<br><br></div>',

        },
        
        {
            uaseName : '<div>Dr. Vijaya Bharathi, Hyderabad</div>',
            text: '<div>The 6-month online training program was a well-structured program. I am extremely grateful to Dr Mala maam and Dr Sonal for putting all their efforts to make this training highly interactive and interesting. <br><br>The course was relevant and delivered in a great and engaging way. The first of its kind that I have come across. The main thing is that all Gynaec. topics were covered systematically.<br><br>Had a great experience with Gynnaecology Academy. <br><br>Thanks to your team.<br><br></div>',
        },
        

        {
            uaseName : '<div>Dr. Dharani Bai G., Bangalore</div>',
            text: '<div>I had a very enlightening experience during the course of GYNAEC ULTRASOUND conducted by Dr. Mala Sibal and Dr. Sonal Panchal. The topics were discussed threadbare and in specific terms allowing us to have a 360-degree view of the matter involved. The description accompanying the presentation were crisp and highly illustrative. The course will definitely give a ringside view of the recent advances in this ignored but highly important field. This enriching encounter would boost the confidence of the trainee and improve the quality of the Gynaecological ultrasound assessment and reporting by acting as a role model training programme. The self-assessment test after each lecture was a real test of knowledge acquisition. The post training examination was conducted very smoothly and with the highest standard of evaluation.<br><br></div>',
        },
        
        {
            uaseName : '<div>Dr. Shobana Mahadevan, Chennai</div>',
            text: '<div>My hearty congratulations and sincere thanks to Dr Mala Sibal and Dr Sonal Panchal and the entire team for having conducted this extremely useful and relevant course on gynaecological ultrasound. As a practising gynaecologist doing scans, I found this course extremely helpful to refine my skills, improve my confidence and diagnostic accuracy. All of us encounter reports that are inadequate and wish we had more information that will help us make correct management decisions, particularly when surgery is necessary. This course takes us through a clear, protocol based approach that is complete and helps in decision making.<br><br> I found the content up to date and evidence based. The meticulous approach and detailing are the unique features. The commentaries were well synced and cohesive. The infertility lectures by Dr Sonal Panchal and those by Dr Mala were exhaustive and thorough. The quality of images, videos and the problem-free technological support were state of the art.<br><br> I would strongly recommend this course to my gynaecological colleagues who are doing scans but want a hands-on training. This online course teaches a skill that is normally taught by direct supervision by the side of the patient, thanks to the painstaking efforts by Dr Mala and Dr Sonal. I would also like to say a special thanks to the supporting members of the team for their prompt responses to our queries.<br><br></div>',
        },

        {
            uaseName : '<div>Dr. Indu B.R., Cochin</div>',
            text: '<div>This course gave me very good, basic and advanced knowledge about Gynac Ultrasound and how to approach a case and give an excellent report. Initially I was doing Gynac Ultrasound as a screening modality for referring patients to the radiology department for getting a diagnosis, but the course changed the perception from screening to making a diagnosis by myself, as a result of excellent motivation and inspiration achieved by the course.<br><br></div>',
        },
        

        {
            uaseName : '<div>Dr. Amritha Karthik, Chennai</div>',
            text: '<div>I am very happy to have joined the Gynaecology Academy Certification Course and will recommend my colleagues to take up this course. <br><br> This is such an eye opener in the gynaec. ultrasound and very helpful in treating our patients. Dr Mala mam your dedication towards ultrasound is enormous and your talks are so meticulously done.<br.<br> This is definitely a great guide for gynaec. ultrasound. <br><br>I thank the whole team behind this certification course.<br><br></div>',
        }
       
    ];
    
    $scope.renderHtml = function(html) {
		return $sce.trustAsHtml(html);
	};

    
    $scope.signOut = function(){
        /*for(var j = 0; j < $rootScope.speakerVideoList.length; j++){
            $rootScope.speakerVideoList[j].isSelected = false;
        }*/
        $rootScope.totalAmount = 0;
        $rootScope.authenticatedUser = {};
        $rootScope.authenticatedUser.UserInfo = {};
        $state.go('home');
    }
    
    if(!$rootScope.authenticatedUser.UserInfo.Email){
        /*for(var j = 0; j < $rootScope.speakerVideoList.length; j++){
            $rootScope.speakerVideoList[j].isSelected = false;
        }*/
        $rootScope.totalAmount = 0;
    }
    
    $scope.verifyEmail = function(){
        var webURL = 'api/gynac/emailverified'
        var dataToBeSend = {};
        dataToBeSend.Guid = $stateParams.id;
        dataToBeSend.Email = $stateParams.email;
        //console.log(dataToBeSend);
		dataService.postData(webURL, dataToBeSend).then(function (data) {
			//console.log(data);
            
            if(dada == 0){
                 $('#triggerInternalError').trigger('click');
            }else if(data == 1){
                $('#triggerSucsessfullyVerifyEmailModal').trigger('click');
            }else if(data == 2){
                $("#triggerEmailNotFound").trigger('click');
            }
            
            //$('#triggerSucsessfullyVerifyEmailModal').trigger('click');
		}, function (errorMessage) {
			console.log(errorMessage + ' Error......');
		});
	}
    
    if($state.is('emailVerification')){
        $scope.verifyEmail();
    }
    
    $scope.pusePreviewVideo = function(){
        $('#previewVideo').get(0).pause();
    }

    
}]);