#pragma strict

var movingLeft:boolean;
var spd:float;
var loc1:Vector3;
var loc2:Vector3;

function Start () {

	movingLeft = true;
	spd = 3;
}

function Update () {
	Debug.Log(transform.position);
	
 	var step = spd * Time.deltaTime;
 	if (movingLeft == true)
	{
		transform.position= Vector3.MoveTowards(transform.position,loc1,step);
		
		if (transform.position == loc1)
		{
			movingLeft=false;
		}
	}

	if (movingLeft == false)
	{
		transform.position=Vector3.MoveTowards(transform.position,loc2,step);
		
		if (transform.position == loc2)
		{
			movingLeft = true;
		}
	}
}