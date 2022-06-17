function myResult(jankenUser){
	var jankenComp = Math.floor(Math.random()*3);
	var jankenName = ["グー", "チョキ", "パー"];
	var strMsg1 = "あいこです";
	var strMsg2 = "あなたの勝ちです";
	var strMsg3 = "あなたの負けです";
	var strMsg = "相手は" + jankenName[jankenComp] + "、";
	if(jankenComp == jankenUser) {
		return strMsg + strMsg1;
	} else if((jankenComp+2)%3 == jankenUser) {
		return strMsg + strMsg2;
	} else {
		return strMsg + strMsg3;
	}
}