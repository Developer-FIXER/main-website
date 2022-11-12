var Varcomments = {}
function saveComment(){
    commentInp  = document.getElementById('commentInp')
    add(commentInp.value)
}

function add(comment){
    console.log(comment)
    var fireRef = firebase.database().ref().child('comments')
    fireRef.push(comment);
    var toBeCleared = document.getElementById('comments')
    toBeCleared.innerHTML = ""
    toBeCleared.className = 'card-home'
    // generate()
    var ref = firebase.database().ref();

    ref.on("value", function(snapshot) {
        comments = (snapshot.val().comments);
        // console.log(snapshot.val().comments, typeof snapshot.val().comments)

        Varcomments = snapshot.val().comments
        // console.log((snapshot.val().comments).length)
        var size = Object.keys(snapshot.val().comments).length;
        console.log(size)
        for (let i = 0; i<size ; i++){
            // console.log(Object.keys(Varcomments)[i]) //right
            // console.log(Object.values(Object.values(Varcomments)[i])) //correct !!!!
            generateNew(Object.values(Varcomments)[i])
        }

    });
    
}


function generate(){
    
    var firebaseConfig = {
        apiKey: "AIzaSyCmngadERg9rWbXWlzfywxCSOiHzx5LyH4",
        authDomain: "js-comments-4456d.firebaseapp.com",
        projectId: "js-comments-4456d",
        storageBucket: "js-comments-4456d.appspot.com",
        messagingSenderId: "871628818258",
        appId: "1:871628818258:web:10ef825c5c524dbb095c8b",
        measurementId: "G-5GZBCHNX5P",
        databaseURL: "https://js-comments-4456d-default-rtdb.firebaseio.com/"

    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
    var ref = firebase.database().ref();

    console.log(firebase.database().ref().child('comments'))

    ref.on("value", function(snapshot) {
        
        var toBeCleared = document.getElementById('comments')
        toBeCleared.innerHTML = ""
        toBeCleared.className = 'card-home'
        comments = (snapshot.val().comments);
        // console.log(snapshot.val().comments, typeof snapshot.val().comments)

        Varcomments = snapshot.val().comments
        // console.log((snapshot.val().comments).length)
        var size = Object.keys(snapshot.val().comments).length;
        console.log(size)
        for (let i = 0; i<size ; i++){
            // console.log(Object.keys(Varcomments)[i]) //right
            // console.log(Object.values(Object.values(Varcomments)[i])) //correct !!!!
            generateNew(Object.values(Varcomments)[i])
        }

    });

    
}

function generateNew(message){

    var _comment = document.createElement("div")
  
    _comment.className="comment"
        
    var c2 = document.getElementById("comments")
    c2.appendChild(_comment)
    
    

    var _quote = document.createElement("div")
    _quote.className="message"
    _quote.innerHTML = "&nbsp;"+message
    _comment.appendChild(_quote)  
}


