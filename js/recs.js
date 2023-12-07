
if (window.location.pathname.includes("books")) {
document.querySelector("#loneliness").addEventListener("click", function() {
    window.location.href = "https://www.goodreads.com/book/show/35456277-the-end-of-loneliness?ac=1&from_search=true&qid=iS8BC67UkU&rank=1";
});

document.querySelector("#suitable").addEventListener("click", function() {
    window.location.href = "https://www.goodreads.com/book/show/50365.A_Suitable_Boy?ref=nav_sb_ss_1_9";
});

document.querySelector("#midnight").addEventListener("click", function() {
    window.location.href = "https://www.goodreads.com/book/show/52578297-the-midnight-library?ref=nav_sb_ss_1_9";
});

document.querySelector("#anxious").addEventListener("click", function() {
    window.location.href = "https://www.goodreads.com/book/show/53799686-anxious-people?ref=nav_sb_ss_1_14";
});

document.querySelector("#brotherless").addEventListener("click", function() {
    window.location.href = "https://www.goodreads.com/book/show/60324341-brotherless-night?from_search=true&from_srp=true&qid=0Wbv2pcYEK&rank=1";
});

document.querySelector("#everlasting").addEventListener("click", function() {
    window.location.href = "https://www.goodreads.com/book/show/59808042-the-book-of-everlasting-things?ref=nav_sb_ss_1_23";
});
}

if (window.location.pathname.includes("movies")){
document.querySelector("#theory").addEventListener("click", function() {
    console.log("going to external page")
    window.location.href = "https://www.imdb.com/title/tt2980516/";
});

document.querySelector("#ladyvan").addEventListener("click", function() {
    console.log("going to external page");
    window.location.href = "https://www.imdb.com/title/tt3722070/?ref_=nv_sr_srsg_5_tt_8_nm_0_q_lady%2520in%2520the%2520";
});

document.querySelector("#ninety-six").addEventListener("click", function(){
    console.log("going to external page");
    window.location.href = "https://www.imdb.com/title/tt7019842/?ref_=nv_sr_srsg_0_tt_8_nm_0_q_96";

});

document.querySelector("#piku").addEventListener("click", function(){
    console.log("going to external page");
    window.location.href = "https://www.imdb.com/title/tt3767372/?ref_=fn_al_tt_1";
});

document.querySelector("#dark").addEventListener("click", function(){
    console.log("going to external page");
    window.location.href = "https://www.imdb.com/title/tt5753856/?ref_=fn_al_tt_1";
});

document.querySelector("#brokenwood").addEventListener("click", function(){
    console.log("going to external page");
    window.location.href = "https://www.imdb.com/title/tt3640276/?ref_=nv_sr_srsg_0_tt_7_nm_1_q_brokenwood";
});

document.querySelector("#unforgotten").addEventListener("click", function(){
    console.log("going to external page");
    window.location.href = "https://www.imdb.com/title/tt4192812/?ref_=nv_sr_srsg_0_tt_8_nm_0_q_unforg";
});

document.querySelector("#coffee").addEventListener("click", function(){
    console.log("going to external page");
    window.location.href = "https://www.imdb.com/title/tt21908802/?ref_=fn_al_tt_1";
});
}


if (window.location.pathname.includes("index")){
document.querySelector("button").addEventListener("click", function() {
    console.log("button has been pressed");
    window.alert("Click on my photo to read some of my writing! Hint: it's on pages 38 and 54 of the magazine.");
});

document.querySelector("#about-me-img").addEventListener("click", function() {
    window.location.href = "https://drive.google.com/file/d/1Z0AT-cKXjvWNz66RAbHA1FtZZ9diBFvq/view";
});
}







