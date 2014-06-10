#pragma strict
var objecttoDestroy : GameObject;
function Start () {
}

function Update () {


 
}

function OnBecameInvisible ()
{

Destroy(this.gameObject);

}

