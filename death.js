#pragma strict
var Boss : GameObject;
function Start () {

}

function Update () {

		if (Boss == null)
      {
           Application.LoadLevel(0);
      }
}