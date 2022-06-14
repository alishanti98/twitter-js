
    document.getElementById("tweet").addEventListener("click", function(e){
    e.preventDefault()
    });

    var tweets = new Array();
    function createTweet(auth,twe){

    var userName,
    tweetMsg;
    //Get Inputs
    if(auth == undefined){
    userName = document.createTextNode(document.getElementById("user_name").value);
    tweetMsg = document.createTextNode(document.getElementById("tweet_msg").value);
    }
    else{
    userName = document.createTextNode(auth);
    tweetMsg = document.createTextNode(twe);  
    }

    var tweetObj = {
    author: document.getElementById("user_name").value,
    tweet:document.getElementById("tweet_msg").value
    },
    //Create Elements
    tweetDiv = document.createElement("div"),
    userNameDiv = document.createElement("div"),
    tweetContentsDiv = document.createElement("div"),
    tweetButtonsDiv = document.createElement("div"),
    likeIcon = document.createElement("i"),
    reTweetIcon = document.createElement("i");
    //Add classes
    tweetDiv.classList.add('tweet');
    userNameDiv.classList.add('username');
    tweetContentsDiv.classList.add('tweet-contents');
    tweetButtonsDiv.classList.add('tweet-buttons');
    likeIcon.classList.add('far','fa-heart');
    reTweetIcon.classList.add('fas','fa-redo');
    //Append Child
    tweetButtonsDiv.appendChild(likeIcon);
    tweetButtonsDiv.appendChild(reTweetIcon);
    tweetContentsDiv.appendChild(tweetMsg);
    userNameDiv.appendChild(userName);
    tweetDiv.appendChild(userNameDiv);
    tweetDiv.appendChild(tweetContentsDiv);
    tweetDiv.appendChild(tweetButtonsDiv);
    var newsFeed = document.querySelector('.newsfeed');
    newsFeed.insertBefore(tweetDiv,newsFeed.firstChild);
    likes();
    tweets.push(tweetObj);
    retweet(document.getElementById("user_name").value,document.getElementById("tweet_msg").value);
    }

    function likes(){
    var like = document.querySelector('.fa-heart');
    like.onclick = function(){
    if(like.classList.contains('far')){
    like.classList.remove('far','fa-heart');
    like.classList.add('fas','fa-heart');
    }else{
    like.classList.remove('fas','fa-heart');
    like.classList.add('far','fa-heart');
    }

    }
    }

    function retweet(auth,twe){
    var redo = document.querySelector('.fa-redo');
    redo.onclick = function(){
    createTweet(auth,twe);
    }

    }

