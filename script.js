// JavaScript Document
document.addEventListener("DOMContentLoaded", function(event) {

	//define the json list items
	var json = [{
		"img"  : "quiz1.png",
		"question" : "Does your project need a Central Authority or Middleman ?",
		"desc" : "Blockchain can remove the middle man, a third party that usually facilitates the transactions and exchanges among different parties, like the bank, through which we make monetary transactions to others and store our money. Since having a medium can cause delays because the middle man must verify the transaction first, or extra costs due to the processing fees, using blockchain can help get rid of this issue by removing a central administrative system and providing a ledger system open for all.",
		"desc_img" : "",
		"next" : "No",
		"reason" : {
		  "yes" : "If you want a middleman, then blockchain is not for you. Blockchain will always connect two peers simultaneously, and with the network, they will be able to communicate without a medium. So, if you want a centralized network, you have to get rid of your need for a middleman.",
		  "no"  : "If your answer is “No” then you might be beneficial for you to utilize the blockchain app. Let’s jump on the next blockchain decision tree segment to assess it better."
		}
	  },
	  {
		"img"  : "quiz2.png",
		"question" : "Do you want to work with digital assets ?",
		"desc" : "With more and more of trade occurring through the e-commerce system, it’s important to have a strong background to increase your sell. Usual e-commerce sites might prevent sellers from providing attractive features as the third-party site have authority over how products are presented, and often a product may be displayed right below a competitor’s product on the website. This could especially affect smaller sellers. On a blockchain platform, sellers can directly connect with customers, making it a good choice for those dealing with digital assets",
		"desc_img" : "quiz2_desc_img.png",
		"next" : "Yes",
		"reason" : {
		  "yes" : "If you want to work with digital assets, then blockchain can be a good way to go. They are obviously other ways to enhance your business without blockchain. But as blockchain will give you the freedom to innovate, it’s a good call.",
		  "no"  : "If your answer is “No” then you might benefit more without a blockchain. You will have to deal with digital assets on the network one way or another, so it’s not necessary for you to go for the blockchain. Let’s jump on the next blockchain decision tree segment to get a better view."
		}
	  },
	  {
		"img"  : "quiz3.png",
		"question" : "Are you wanting / looking for a permanent solution for the digital assets ?",
		"desc" : "Using a blockchain would mean that there is a permanent channel and record for users. For some this may be beneficial, where if all parties agree with conditions and manage the state of the asset. However, if your business or purpose of using blockchain requires constant change and modifications, it would not be productive.",
		"desc_img" : "",
		"next" : "Yes",
		"reason" : {
		  "yes" : "If you can develop a permanent solution for the digital assets then going for blockchain should be a good call. A permanent block on blockchain can most certainly help you maintain the desired business scheme you want. Also, remember once you make it you can’t change it. So, therefore you can move on to out next blockchain decision tree question for further assistant.",
		  "no"  : "If your answer is “No” then you may benefit you more to leave blockchain. Blockchain can’t help you in any way here."
		}
	  },
	  {
		"img"  : "quiz4.png",
		"question" : "Do you need a common shared database ?",
		"desc" : "With blockchain, the common ledger system is shared with many unknown parties. Everything is maintained through a node channel, with many nodes in the network that verify and review the information without human contact. Hence blockchain could help encourage higher level of integrity as modifying data is almost impossible without the verification of other nodes, but is easily done in typical databases. Meanwhile, a common traditional data base utilizes a client-server model, where the client can modify data stored on the network at any time, any way.",
		"desc_img" : "quiz4_desc_img.png",
		"next" : "Yes",
		"reason" : {
		  "yes" : "If your answer is “Yes” then you need a blockchain implementation. Because blockchain would be able to give a trustless ledger system with cheap pricing without any trust issues. That’s a safe bargain right there. So, you can jump right to the next blockchain decision tree segment.",
		  "no"  : "If your answer is “No” then you should avoid blockchain and work with a typical blockchain with more money."
		}
	  },
	  {
		"img"  : "quiz5.png",
		"question" : "Are you working with multiple parties ?",
		"desc" : "With everything available on the common ledger system in blockchain, it can provide a perspective of transparency of business among multiple parties. ",
		"desc_img" : "",
		"next" : "Yes",
		"reason" : {
		  "yes" : "Answering “Yes” for this question would give a straight yes vote for using blockchain app. Working with different parties without any trust issues are always a mean of bad business. So, blockchain can link all of you without any worries.",
		  "no"  : "Answering “No” here would mean that you don’t need blockchain. However, you can utilize blockchain in other ways too."
		}
	  },
	  {
		"img"  : "quiz6.png",
		"question" : "Do you want a trustless environment ?",
		"desc" : "Usually, parties must trust each other when completing any type of exchange; for example, trusting other business assets to keep their agreements. With blockchain, this no longer becomes a concern.",
		"desc_img" : "",
		"next" : "Yes",
		"reason" : {
		  "yes" : "If you want a trustless environment, then you should go for the blockchain platform. Blockchain will give you a fair mean in a business and platform where you can work with multiple parties without any worries. You can move on to the next question of this blockchain decision tree and then better know if you need it or not.",
		  "no"  : " If your answer is “No” then it’s better to avoid blockchain and use the old traditional ways."
		}
	  },
	  {
		"img"  : "quiz7.png",
		"question" : "Does your network need high efficiency in terms of size and speed due to its complexity ?",
		"desc" : "Blockchain has many benefits but has a performance gap, where firstly because the system is quite new, it can take a lot more effort to build and maintain a blockchain. Furthermore, the system requires a wide variety of nodes worldwide to make blockchain more efficient. Lastly, the speed of a transaction through blockchain can vary based on how populated it gets, where Bitcoin takes about 10 minutes to process, but the more populated it gets, the longer it takes (up to days).",
		"desc_img" : "",
		"next" : "No",
		"reason" : {
		  "yes" : "If you want a high-speed performance than its better not to work with blockchain for now. There are some networks that can give you the backup you wish to, but there will be some limitations too. There’s no network without any limitations, and blockchain is not an exception to that.",
		  "no"  : "If your answer is “No” then you be able to utilize blockchain. Let’s jump on the next blockchain decision tree segment to assess it better."
		}
	  },
	  {
		"img"  : "quiz8.png",
		"question" : "Does your requirement include large data storage unit ?",
		"desc" : "With almost everything being stored digitally, most parties could require a great amount of storage space for themselves. However, with blockchain working with many individuals at the same time, providing large storage is a struggle and can be costly, with \$100 per GB storing 500000 transactions.",
		"desc_img" : "",
		"next" : "No", 
		"reason" : {
		  "yes" : "Answering “Yes” in this blockchain questionnaire then blockchain might not be able to benefit you here. It’s better to move into other solutions for it.",
		  "no"  : "If your answer is “No” then you should look into blockchain. It can fulfill your small-scale demands without any security breaches. Now, let’s move into the next section of our blockchain decision tree guide."
		}
	  },
	  {
		"img"  : "quiz9.png",
		"question" : "Are you looking for a contractual solution ?",
		"desc" : "Often, contracts can become problematic for the parties involved. Blockchain can make use of smart contracts, where the transactions are automated when a condition on the contract is completed.",
		"desc_img" : "",
		"next" : "Yes",
		"reason" : {
		  "yes" : "If your answer is “Yes” then you should definitely utilize blockchain for contractual solutions. With smart contracts, you will be able to streamline projects without any nuisance of all the paperwork.",
		  "no"  : "Answering “No” here would establish the fact that you don’t need blockchain. So, it’s better to move into other solutions. Let’s jump on the next blockchain decision tree segment to assess it better."
		}
	  },
	  {
		"img"  : "quiz10.png",
		"question" : "Do you require no change or little change in the system ?",
		"desc" : "Blockchain is often considered an immutable system, because users cannot change rules in the system to make it more favorable for themselves, ensuring balance between parties. This however can be altered if a group of miners control over 50% of the network, where they can alter the rules and regulations. However, consensus mechanisms have been instilled to ensure a more secure environment.",
		"desc_img" : "",
		"next" : "Yes",
		"reason" : {
		  "yes" : "If you are okay with no change of content rules, then you should definitely try it out. It’s a wonderful project that can easily work with your business type. You can move on to the next chapter of this blockchain decision tree checklist from right here.",
		  "no"  : " If your answer is “No” then it’s better to go with a system that gives you more freedom to work with. Even though blockchain doesn’t give you the freedom but all the rules of the system are established to maintain the decentralization aspect."
		}
	  },
	  {
		"img"  : "quiz11.png",
		"question" : "Do you need shared write access ?",
		"desc" : "In blockchain, there is shared write access. Users have the ability to read and add content to the blockchain but are unable to edit past content in the future.  ",
		"desc_img" : "",
		"next" : "Yes",
		"reason" : {
		  "yes" : "If you answer a “Yes” here too, we will establish that you need to look into blockchain. However, as you know there are different types of the blockchain, we will ask two more questions to decide which one suits you best. So, let’s move forward and see what we have in the next two questions in this blockchain decision tree guide.",
		  "no"  : "If your answer is “No” then you won’t be needing any blockchain solutions to boost your game. You can try out other available solution for adding a new feature to your project. Unfortunately, our journey ends here."
		}
	  },
	  {
		"img"  : "quiz12.png",
		"question" : "Do you need control over the network functionalities ?",
		"desc" : "In private blockchain platforms, users must pass a verified protocol to access the network. Consensus determines who will be able to participate and maintain the ledger, and the owner can delete, edit, or override entries when they see needed. In a private system, users operate on a closed database and occasionally may be unable to validate or authenticate transactions or rule changes. Hence, private blockchains are not really decentralized, but they are distributed, as they allow for some control over functionalities. ",
		"desc_img" : "",
		"next" : "Yes",
		"reason" : {
		  "yes" : "Answering “Yes” for this question would give a straight yes vote for using blockchain app. Working with different parties without any trust issues are always a mean of bad business. So, blockchain can link all of you without any worries.",
		  "no"  : "If your answer is “No” then we’ll move on to the next questions about blockchain decision tree guide to make the final call for you."
		}
	  },
	  {
		"img"  : "quiz13.png",
		"question" : "Do you want transactions to be public ?",
		"desc" : "Public blockchains are open, with any user able to access and download the protocol whenever they would like to. It may seem more decentralized and distributed than a private blockchain. However, this means that all transactions are public – you can see others’, and others can see yours – which may be undesirable for some users. ",
		"desc_img" : "",
		"next" : "Yes",
		"reason" : {
		  "yes" : "Some people want total transparency in their ledger system, others want more control over the access. In private blockchains, you would require authentication to access the ledger. But in public, you don’t have any requirements. So, if you want public transactions, then it’s best to go for a public blockchain.",
		  "no"  : "Answering “No” here would mean that you don’t need blockchain. However, you can utilize blockchain in other ways too."
		}
	  }];

	function stackedCards () {

		var stackedOptions = 'Top'; //Change stacked cards view from 'Bottom', 'Top' or 'None'.
		var rotate = true; //Activate the elements' rotation for each move on stacked cards.
		var items = 3; //Number of visible elements when the stacked options are bottom or top.
		var elementsMargin = 10; //Define the distance of each element when the stacked options are bottom or top.
		var useOverlays = true; //Enable or disable the overlays for swipe elements.
		var maxElements; //Total of stacked cards on DOM.
		var currentPosition = 0; //Keep the position of active stacked card.
		var velocity = 0.3; //Minimum velocity allowed to trigger a swipe.
		var topObj; //Keep the swipe top properties.
		var rightObj; //Keep the swipe right properties.
		var leftObj; //Keep the swipe left properties.
		var listElNodesObj; //Keep the list of nodes from stacked cards.
		var listElNodesWidth; //Keep the stacked cards width.
		var currentElementObj; //Keep the stacked card element to swipe.
		var stackedCardsObj; //Objet of stacked cards
		var isFirstTime = true; //declare the is first time
		var elementHeight; //Element height 
		var obj; //Simple object
		var elTrans; //eltrans object

		var dataList = json; //define the datalist

		// Get the modal
		var modal = document.getElementById("myModal");

		// Get the button that opens the modal
		var btn = document.getElementById("stacked-cards-block");
		var btnReload = document.getElementById("button-reload");

		// Get the <span> element that closes the modal
		var span = document.getElementsByClassName("close")[0];

		// When the user clicks on the button, open the modal
		btn.onclick = function() {
			modal.style.display = "block";// setto block
			document.getElementById("image_detail").src = "images/quiz"+(currentPosition+1)+".png";
			document.getElementById("title_detail").innerHTML = dataList[currentPosition].question;
			document.getElementById("desc_detail").innerHTML = dataList[currentPosition].desc;
			
			console.log(currentPosition);
		}

		// When the user click the reload Button
		btnReload.onclick = function(){
			location.reload();
		}

		// When the user clicks on <span> (x), close the modal
		span.onclick = function() {
			modal.style.display = "none";
		}

		// When the user clicks anywhere outside of the modal, close it
		window.onclick = function(event) {
			if (event.target == modal) {
				modal.style.display = "none";
			}
		}
		
		//obj to hold blocks of stacked cards
		obj = document.getElementById('stacked-cards-block');
		//stacked card obj will hold stacked data
		stackedCardsObj = obj.querySelector('.stackedcards-container');
		//list Element Object will hold the childers
		listElNodesObj = stackedCardsObj.children;
		
		//object at the top
		topObj = obj.querySelector('.stackedcards-overlay.top');

		//object at the right
		rightObj = obj.querySelector('.stackedcards-overlay.right');

		//object at the left
		leftObj = obj.querySelector('.stackedcards-overlay.left');
				
		countElements();//count elements
		currentElement();//current elements
    	changeBackground();//change background
		listElNodesWidth = stackedCardsObj.offsetWidth;//widht element node width
		currentElementObj = listElNodesObj[0];//current element
		updateUi();//calling update ui
		
		//Prepare elements on DOM
		addMargin = elementsMargin * (items -1) + 'px';//add margin in pixel
		
		if(stackedOptions === "Top"){
	
			for(i = items; i < maxElements; i++){
				listElNodesObj[i].classList.add('stackedcards-top', 'stackedcards--animatable', 'stackedcards-origin-top');
			}
			
			elTrans = elementsMargin * (items - 1);
			
			stackedCardsObj.style.marginBottom = addMargin;// define the stackedCardObj style
			
		} else if(stackedOptions === "Bottom"){
			
			
			for(i = items; i < maxElements; i++){
				listElNodesObj[i].classList.add('stackedcards-bottom', 'stackedcards--animatable', 'stackedcards-origin-bottom');
			}
			
			elTrans = 0;
			
			stackedCardsObj.style.marginBottom = addMargin;
			
		} else if (stackedOptions === "None"){
			
			for(i = items; i < maxElements; i++){
				listElNodesObj[i].classList.add('stackedcards-none', 'stackedcards--animatable');
			}
			
			elTrans = 0;
		
		}
			
		for(i = items; i < maxElements; i++){
			listElNodesObj[i].style.zIndex = 0;
			listElNodesObj[i].style.opacity = 0;
			listElNodesObj[i].style.webkitTransform ='scale(' + (1 - (items * 0.04)) +') translateX(0) translateY(' + elTrans + 'px) translateZ(0)';
			listElNodesObj[i].style.transform ='scale(' + (1 - (items * 0.04)) +') translateX(0) translateY(' + elTrans + 'px) translateZ(0)';
		}
		
		if(listElNodesObj[currentPosition]){
			listElNodesObj[currentPosition].classList.add('stackedcards-active');
		}
		
		if(useOverlays){
			leftObj.style.transform = 'translateX(0px) translateY(' + elTrans + 'px) translateZ(0px) rotate(0deg)';
			leftObj.style.webkitTransform = 'translateX(0px) translateY(' + elTrans + 'px) translateZ(0px) rotate(0deg)';
			
			rightObj.style.transform = 'translateX(0px) translateY(' + elTrans + 'px) translateZ(0px) rotate(0deg)';
			rightObj.style.webkitTransform = 'translateX(0px) translateY(' + elTrans + 'px) translateZ(0px) rotate(0deg)';
			
			topObj.style.transform = 'translateX(0px) translateY(' + elTrans + 'px) translateZ(0px) rotate(0deg)';
			topObj.style.webkitTransform = 'translateX(0px) translateY(' + elTrans + 'px) translateZ(0px) rotate(0deg)';
			
		} else {
			leftObj.className = '';
			rightObj.className = '';
			topObj.className = '';
			
			leftObj.classList.add('stackedcards-overlay-hidden');
			rightObj.classList.add('stackedcards-overlay-hidden');
			topObj.classList.add('stackedcards-overlay-hidden');
		}
		
		//Remove class init
		setTimeout(function() {
			obj.classList.remove('init');
		},150);
		
		
		function backToMiddle() {
	
			removeNoTransition();
			transformUi(0, 0, 1, currentElementObj); 
	
			if(useOverlays){
				transformUi(0, 0, 0, leftObj);
				transformUi(0, 0, 0, rightObj);
				transformUi(0, 0, 0, topObj);
			}
	
			setZindex(5);
	
			if(!(currentPosition >= maxElements)){
				//roll back the opacity of second element
				if((currentPosition + 1) < maxElements){
					listElNodesObj[currentPosition + 1].style.opacity = '.8';
				}
			}
		};
		
		// Usable functions
		function countElements() {
			maxElements = listElNodesObj.length;
			if(items > maxElements){
				items = maxElements;
			}
		};
		
		//Keep the active card.
		function currentElement() {
		  currentElementObj = listElNodesObj[currentPosition];
		};
		
		//Change background for each swipe.
		function changeBackground() { 
      		document.body.classList.add("background-" + currentPosition + "");
		};
		
		//Change states
		function changeStages() {
			if(currentPosition == maxElements){
				//Event listener created to know when transition ends and changes states
				listElNodesObj[maxElements - 1].addEventListener('transitionend', function(){
					document.body.classList.add("background-7");
					document.querySelector('.stage').classList.add('hidden'); 
					document.querySelector('.final-state').classList.remove('hidden');
					document.querySelector('.final-state').classList.add('active');
					listElNodesObj[maxElements - 1].removeEventListener('transitionend', null, false); 
				});
			}
		};

		//Show error stage if there is a error
		function showErrorStage(){
			console.log(currentPosition);
			//Event listener created to know when transition ends and changes states
			listElNodesObj[currentPosition].addEventListener('transitionend', function(){
				document.body.classList.add("background-7");
				document.querySelector('.stage').classList.add('hidden'); 
				document.querySelector('.wrong-state').classList.remove('hidden');
				document.querySelector('.wrong-state').classList.add('active');
				document.getElementById("wrong_title").innerHTML = dataList[currentPosition-1].question;
				document.getElementById("wrong_subtitle").innerHTML = dataList[currentPosition-1].desc;
				document.getElementById("text_yes").innerHTML = dataList[currentPosition-1].reason.yes;
				document.getElementById("text_no").innerHTML = dataList[currentPosition-1].reason.no;
				listElNodesObj[currentPosition].removeEventListener('transitionend', null, false); 
			});
		}

		// Show public blockchain page
		function showPublic(){
			//Event listener created to know when transition ends and changes states
			listElNodesObj[currentPosition].addEventListener('transitionend', function(){
				document.body.classList.add("background-7");
				document.querySelector('.stage').classList.add('hidden'); 
				document.querySelector('.wrong-state').classList.remove('hidden');
				document.querySelector('.wrong-state').classList.add('active');
				document.getElementById("image_state").src = "images/bc_public.png";
				document.getElementById("wrong_title").innerHTML = "Public Blockchain";
				document.getElementById("wrong_subtitle").innerHTML = "Public blockchains are like the true public ledger where anyone can join the network and have the complete authority just like everyone else in the blockchain. Everyone has the same and equal rights. Its properties are linear with Satoshi Nakamoto’s concept. You can call it the rebellious up-right against the corporate giants. The public network dissolves the need of a third eye lurking over your personal asset. Most importantly, it doesn’t have a governing body like the private network. You can call it the main distinguishing characteristic from the private one. A big disadvantage of the public blockchains is it consumes a lot of electrical power to perform the extremely complicated consensus algorithm. But then again, the same point can be a big advantage too. As it is minable, common people can earn cryptocurrencies by lending their processing power and the utility bill.";
				document.getElementById("text_yes").innerHTML = "";
				document.getElementById("text_no").innerHTML = "";
				document.getElementById("ans_yes").innerHTML = "";
				document.getElementById("ans_no").innerHTML = "";
				listElNodesObj[currentPosition-1].removeEventListener('transitionend', null, false); 
			});
		}

		// Show private blockchain page
		function showPrivate(){
			//Event listener created to know when transition ends and changes states
			listElNodesObj[currentPosition].addEventListener('transitionend', function(){
				document.body.classList.add("background-7");
				document.querySelector('.stage').classList.add('hidden'); 
				document.querySelector('.wrong-state').classList.remove('hidden');
				document.querySelector('.wrong-state').classList.add('active');
				document.getElementById("image_state").src = "images/bc_private.png";
				document.getElementById("wrong_title").innerHTML = "Private Blockchain";
				document.getElementById("wrong_subtitle").innerHTML = "A private blockchain is basically a private or selective blockchain. Meaning, only the owner of the blockchain will choose who can join the network and who cannot. And also, only the handful chose can have the digital ledger where all the data is stored";
				document.getElementById("text_yes").innerHTML = "";
				document.getElementById("text_no").innerHTML = "";
				document.getElementById("ans_yes").innerHTML = "";
				document.getElementById("ans_no").innerHTML = "";
				listElNodesObj[currentPosition-1].removeEventListener('transitionend', null, false); 
			});
		}
    
		//Functions to swipe left elements on logic external action.
		function onActionLeft() {

			if(!(currentPosition >= maxElements)){
				if(useOverlays) {
					leftObj.classList.remove('no-transition');
					topObj.classList.remove('no-transition');
					leftObj.style.zIndex = '8';
					transformUi(0, 0, 1, leftObj);
				}
				
				setTimeout(function() {
					onSwipeLeft();
					resetOverlayLeft();
				},300);
			}
		};
		
		//Functions to swipe right elements on logic external action.
		function onActionRight() {

			if(!(currentPosition >= maxElements)){
				if(useOverlays) {
					rightObj.classList.remove('no-transition');
					topObj.classList.remove('no-transition');
					rightObj.style.zIndex = '8';
					transformUi(0, 0, 1, rightObj);
				}
	
				setTimeout(function(){
					onSwipeRight();
					resetOverlayRight();
				},300);
			}
			
		};
		
		//Functions to swipe top elements on logic external action.
		function onActionTop() {
			if((currentPosition > 0)){
				if(useOverlays) {
					leftObj.classList.remove('no-transition');
					rightObj.classList.remove('no-transition');
					topObj.classList.remove('no-transition');
					topObj.style.zIndex = '8';
					transformUi(0, 0, 1, topObj);
				}
				
				setTimeout(function(){
					onSwipeTop();
					resetOverlays();
				},300); //wait animations end
			}
		};
		
		//Swipe active card to left.
		function onSwipeLeft() {

			console.log("left"+currentPosition);

			if(currentPosition >= 1 && currentPosition <=5 || currentPosition >=8 && currentPosition <= 11){
				showErrorStage();
			}
			if(currentPosition == 12){
				console.log("private bc");
				showPrivate();
			}

			removeNoTransition();
			transformUi(-1000, 0, 0, currentElementObj);
			if(useOverlays){
				transformUi(-1000, 0, 0, leftObj); //Move leftOverlay
				transformUi(-1000, 0, 0, topObj); //Move topOverlay
				resetOverlayLeft();
			}
			currentPosition = currentPosition + 1;
			updateUi();
			currentElement();
			changeBackground();
			// changeStages();
			setActiveHidden();
		};
		
		//Swipe active card to right.
		function onSwipeRight() {
			console.log("rigth"+currentPosition);

			if(currentPosition==0 || currentPosition >=6 && currentPosition <=7){
				showErrorStage();
			}

			if(currentPosition == 12){
				console.log("public bc");
				showPublic();
			}
			removeNoTransition();
			transformUi(1000, 0, 0, currentElementObj);
			if(useOverlays){
				transformUi(1000, 0, 0, rightObj); //Move rightOverlay
				transformUi(1000, 0, 0, topObj); //Move topOverlay
				resetOverlayRight();
			}
	
			currentPosition = currentPosition + 1;
			updateUi();
			currentElement();
			changeBackground();
			// changeStages();
			setActiveHidden();
		};
		
		//Swipe active card to top.
		function onSwipeTop() {
			removeNoTransition();
			transformUi(0, -1000, 0, currentElementObj);
			if(useOverlays){
				transformUi(0, -1000, 0, leftObj); //Move leftOverlay
				transformUi(0, -1000, 0, rightObj); //Move rightOverlay
				transformUi(0, -1000, 0, topObj); //Move topOverlay
				resetOverlays();
			}

			currentPosition = currentPosition - 1;
			updateUi();
			currentElement();
			changeBackground();
			changeStages();
			// setActiveHidden();
		};
		
		//Remove transitions from all elements to be moved in each swipe movement to improve perfomance of stacked cards.
		function removeNoTransition() {
			if(listElNodesObj[currentPosition]){
				
				if(useOverlays) {
					leftObj.classList.remove('no-transition');
					rightObj.classList.remove('no-transition');
					topObj.classList.remove('no-transition');
				}
				
				listElNodesObj[currentPosition].classList.remove('no-transition');
				listElNodesObj[currentPosition].style.zIndex = 6;
			}
			
		};
	
		//Move the overlay left to initial position.
		function resetOverlayLeft() {
			if(!(currentPosition >= maxElements)){
				if(useOverlays){
					setTimeout(function(){
						
						if(stackedOptions === "Top"){
							
							elTrans = elementsMargin * (items - 1);
						
						} else if(stackedOptions === "Bottom" || stackedOptions === "None"){
							
							elTrans = 0;
						
						}
						
						if(!isFirstTime){
							
							leftObj.classList.add('no-transition');
							topObj.classList.add('no-transition');
							
						}
						
						requestAnimationFrame(function(){
							
							leftObj.style.transform = "translateX(0) translateY(" + elTrans + "px) translateZ(0)";
							leftObj.style.webkitTransform = "translateX(0) translateY(" + elTrans + "px) translateZ(0)";
							leftObj.style.opacity = '0';
							
							topObj.style.transform = "translateX(0) translateY(" + elTrans + "px) translateZ(0)";
							topObj.style.webkitTransform = "translateX(0) translateY(" + elTrans + "px) translateZ(0)";
							topObj.style.opacity = '0';
						
						});
						
					},300);
					
					isFirstTime = false;
				}
			}
	   };
	   
		//Move the overlay right to initial position.
		function resetOverlayRight() {
			if(!(currentPosition >= maxElements)){
				if(useOverlays){
					setTimeout(function(){
						
						if(stackedOptions === "Top"){+2
							
							elTrans = elementsMargin * (items - 1);
						
						} else if(stackedOptions === "Bottom" || stackedOptions === "None"){
							
							elTrans = 0;
						
						}
						
						if(!isFirstTime){
							
							rightObj.classList.add('no-transition');
							topObj.classList.add('no-transition');
							
						}
						
						requestAnimationFrame(function(){
							
							rightObj.style.transform = "translateX(0) translateY(" + elTrans + "px) translateZ(0)";
							rightObj.style.webkitTransform = "translateX(0) translateY(" + elTrans + "px) translateZ(0)";
							rightObj.style.opacity = '0';
							
							topObj.style.transform = "translateX(0) translateY(" + elTrans + "px) translateZ(0)";
							topObj.style.webkitTransform = "translateX(0) translateY(" + elTrans + "px) translateZ(0)";
							topObj.style.opacity = '0';
						
						});
	
					},300);
					
					isFirstTime = false;
				}
			}
	   };
	   
		//Move the overlays to initial position.
		function resetOverlays() {
			if(!(currentPosition >= maxElements)){
				if(useOverlays){
	
					setTimeout(function(){
						if(stackedOptions === "Top"){
							
							elTrans = elementsMargin * (items - 1);
						
						} else if(stackedOptions === "Bottom" || stackedOptions === "None"){
	
							elTrans = 0;
	
						}
						
						if(!isFirstTime){
	
							leftObj.classList.add('no-transition');
							rightObj.classList.add('no-transition');
							topObj.classList.add('no-transition');
	
						}
						
						requestAnimationFrame(function(){
	
							leftObj.style.transform = "translateX(0) translateY(" + elTrans + "px) translateZ(0)";
							leftObj.style.webkitTransform = "translateX(0) translateY(" + elTrans + "px) translateZ(0)";
							leftObj.style.opacity = '0';
							
							rightObj.style.transform = "translateX(0) translateY(" + elTrans + "px) translateZ(0)";
							rightObj.style.webkitTransform = "translateX(0) translateY(" + elTrans + "px) translateZ(0)";
							rightObj.style.opacity = '0';
							
							topObj.style.transform = "translateX(0) translateY(" + elTrans + "px) translateZ(0)";
							topObj.style.webkitTransform = "translateX(0) translateY(" + elTrans + "px) translateZ(0)";
							topObj.style.opacity = '0';
	
						});
	
					},300);	// wait for animations time
					
					isFirstTime = false;							
				}
			}
	   };
		
		function setActiveHidden() {
			if(!(currentPosition >= maxElements)){
				listElNodesObj[currentPosition - 1].classList.remove('stackedcards-active');
				listElNodesObj[currentPosition - 1].classList.add('stackedcards-hidden');
				listElNodesObj[currentPosition].classList.add('stackedcards-active');
			}		 
		};
	
		//Set the new z-index for specific card.
		function setZindex(zIndex) {
			if(listElNodesObj[currentPosition]){
				listElNodesObj[currentPosition].style.zIndex = zIndex;
			}		 
		};
	
    // Remove element from the DOM after swipe. To use this method you need to call this function in onSwipeLeft, onSwipeRight and onSwipeTop and put the method just above the variable 'currentPosition = currentPosition + 1'. 
    //On the actions onSwipeLeft, onSwipeRight and onSwipeTop you need to remove the currentPosition variable (currentPosition = currentPosition + 1) and the function setActiveHidden

		function removeElement() {
      currentElementObj.remove();
      if(!(currentPosition >= maxElements)){
				listElNodesObj[currentPosition].classList.add('stackedcards-active');
			}		
		};
		
		//Add translate X and Y to active card for each frame.
		function transformUi(moveX,moveY,opacity,elementObj) {
			requestAnimationFrame(function(){  
				var element = elementObj;
				
				// Function to generate rotate value 
				function RotateRegulator(value) {
				   if(value/10 > 15) {
					   return 15;
				   }
				   else if(value/10 < -15) {
					   return -15;
				   }
				   return value/10;
				}
				
				if(rotate){
					rotateElement = RotateRegulator(moveX);
				} else {
					rotateElement = 0;
				}
				
				if(stackedOptions === "Top"){
					elTrans = elementsMargin * (items - 1);
					if(element){     
						element.style.webkitTransform = "translateX(" + moveX + "px) translateY(" + (moveY + elTrans) + "px) translateZ(0) rotate(" + rotateElement + "deg)";
						element.style.transform = "translateX(" + moveX + "px) translateY(" + (moveY + elTrans) + "px) translateZ(0) rotate(" + rotateElement + "deg)";
						element.style.opacity = opacity;
					}
				} else if(stackedOptions === "Bottom" || stackedOptions === "None"){
					
					if(element){
						element.style.webkitTransform = "translateX(" + moveX + "px) translateY(" + (moveY) + "px) translateZ(0) rotate(" + rotateElement + "deg)";
						element.style.transform = "translateX(" + moveX + "px) translateY(" + (moveY) + "px) translateZ(0) rotate(" + rotateElement + "deg)";
						element.style.opacity = opacity;
					}
				
				}
			});	  
		};
	
		//Action to update all elements on the DOM for each stacked card.
		function updateUi() {
			requestAnimationFrame(function(){
				elTrans = 0;
				var elZindex = 5;
				var elScale = 1;
				var elOpac = 1;
				var elTransTop = items;
				var elTransInc = elementsMargin;
	
				for(i = currentPosition; i < (currentPosition + items); i++){
					if(listElNodesObj[i]){
						if(stackedOptions === "Top"){
	
							listElNodesObj[i].classList.add('stackedcards-top', 'stackedcards--animatable', 'stackedcards-origin-top');
	
							if(useOverlays){
								leftObj.classList.add('stackedcards-origin-top');
								rightObj.classList.add('stackedcards-origin-top');
								topObj.classList.add('stackedcards-origin-top'); 
							}
	
							elTrans = elTransInc * elTransTop;
							elTransTop--;
	
						} else if(stackedOptions === "Bottom"){
							listElNodesObj[i].classList.add('stackedcards-bottom', 'stackedcards--animatable', 'stackedcards-origin-bottom');
	
							if(useOverlays){
								leftObj.classList.add('stackedcards-origin-bottom');
								rightObj.classList.add('stackedcards-origin-bottom');
								topObj.classList.add('stackedcards-origin-bottom');
							}
	
							elTrans = elTrans + elTransInc;
	
						} else if (stackedOptions === "None"){
	
							listElNodesObj[i].classList.add('stackedcards-none', 'stackedcards--animatable');
							elTrans = elTrans + elTransInc;
	
						}
	
						listElNodesObj[i].style.transform ='scale(' + elScale + ') translateX(0) translateY(' + (elTrans - elTransInc) + 'px) translateZ(0)';
						listElNodesObj[i].style.webkitTransform ='scale(' + elScale + ') translateX(0) translateY(' + (elTrans - elTransInc) + 'px) translateZ(0)';
						listElNodesObj[i].style.opacity = elOpac;
						listElNodesObj[i].style.zIndex = elZindex;
	
						elScale = elScale - 0.04;
						elOpac = elOpac - (1 / items);
						elZindex--;
					}
				}
	
			});
		  
		};
	
		//Touch events block
		var element = obj;
		var startTime;
		var startX;
		var startY;
		var translateX;
		var translateY;
		var currentX;
		var currentY;
		var touchingElement = false;
		var timeTaken;
		var topOpacity;
		var rightOpacity;
		var leftOpacity;
	
		function setOverlayOpacity() {
	
			topOpacity = (((translateY + (elementHeight) / 2) / 100) * -1);
			rightOpacity = translateX / 100;
			leftOpacity = ((translateX / 100) * -1);
			
	
			if(topOpacity > 1) {
				topOpacity = 1;
			}
	
			if(rightOpacity > 1) {
				rightOpacity = 1;
			}
	
			if(leftOpacity > 1) {
				leftOpacity = 1;
			}
		}

		// gesture start
		function gestureStart(evt) {
			startTime = new Date().getTime();
			
			startX = evt.changedTouches[0].clientX;
			startY = evt.changedTouches[0].clientY;
			
			currentX = startX;
			currentY = startY;
	
			setOverlayOpacity();
			
			touchingElement = true;
			if(!(currentPosition >= maxElements)){
				if(listElNodesObj[currentPosition]){
					listElNodesObj[currentPosition].classList.add('no-transition');
					setZindex(6);
					
					if(useOverlays){
						leftObj.classList.add('no-transition');
						rightObj.classList.add('no-transition');
						topObj.classList.add('no-transition');
					}
					
					if((currentPosition + 1) < maxElements){
						listElNodesObj[currentPosition + 1].style.opacity = '1';
					}
					
					elementHeight = listElNodesObj[currentPosition].offsetHeight / 3;
				}
	
			}
			
		};
		
		function gestureMove(evt) {
			currentX = evt.changedTouches[0].pageX;
			currentY = evt.changedTouches[0].pageY;
			
			translateX = currentX - startX;
			translateY = currentY - startY;
	
			setOverlayOpacity();
			
			if(!(currentPosition >= maxElements)){
				evt.preventDefault();
				transformUi(translateX, translateY, 1, currentElementObj);
	
				if(useOverlays){
					transformUi(translateX, translateY, topOpacity, topObj);
	
					if(translateX < 0){
						transformUi(translateX, translateY, leftOpacity, leftObj);
						transformUi(0, 0, 0, rightObj);
	
					} else if(translateX > 0){
						transformUi(translateX, translateY, rightOpacity, rightObj);
						transformUi(0, 0, 0, leftObj);
					}
	
					if(useOverlays){
						leftObj.style.zIndex = 8;
						rightObj.style.zIndex = 8;
						topObj.style.zIndex = 7;
					}
	
				}
	
			}
			
		};
		
		function gestureEnd(evt) {
			
			if(!touchingElement){
				return;
			}
			
			translateX = currentX - startX;
			translateY = currentY - startY;
			
			timeTaken = new Date().getTime() - startTime;
			
			touchingElement = false;
			
			if(!(currentPosition >= maxElements)){
				if(translateY < (elementHeight * -1) && translateX > ((listElNodesWidth / 2) * -1) && translateX < (listElNodesWidth / 2)){  //is Top?
	
					if(translateY < (elementHeight * -1) || (Math.abs(translateY) / timeTaken > velocity)){ // Did It Move To Top?
						onSwipeTop();
					} else {
						backToMiddle();
					}
	
				} else {
	
					if(translateX < 0){
						if(translateX < ((listElNodesWidth / 2) * -1) || (Math.abs(translateX) / timeTaken > velocity)){ // Did It Move To Left?
							onSwipeLeft();
						} else {
							backToMiddle();
						}
					} else if(translateX > 0) {
						
						if (translateX > (listElNodesWidth / 2) && (Math.abs(translateX) / timeTaken > velocity)){ // Did It Move To Right?
							onSwipeRight();
						} else {
							backToMiddle();
						}
	
					}
				}
			}
		};
		
		element.addEventListener('touchstart', gestureStart, false);
		element.addEventListener('touchmove', gestureMove, false);
		element.addEventListener('touchend', gestureEnd, false);
		
		//Add listeners to call global action for swipe cards
		var buttonLeft = document.querySelector('.left-action');
		var buttonTop = document.querySelector('.top-action');
		var buttonRight = document.querySelector('.right-action');

		buttonLeft.addEventListener('click', onActionLeft, false);
		buttonTop.addEventListener('click', onActionTop, false);
		buttonRight.addEventListener('click', onActionRight, false);

	}
	
	//load stacked cards
	stackedCards();
});