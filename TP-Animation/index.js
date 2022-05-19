//TweenMax to :
//1. target element (class)
//2. duration (seconds)
//3. properties : repeat (-1 = infinite), y (img size), ease (img total frames)
TweenMax.to('.seqA_container',5,{repeat:-1,backgroundPosition:"0px -46680px",ease:SteppedEase.config(120)});
TweenMax.to('.seqB_container',5,{repeat:-1,backgroundPosition:"0px -39864px",ease:SteppedEase.config(132)});