#pragma strict
var scoreText : GUIText;
var spitting : AudioClip;
var splatter : GameObject;
var damage = 1;
function Start () {
}

function Update () {
	 transform.Translate(Vector3.up * 20 * Time.deltaTime);
	//rigidbody.AddForce(transform.up * 10);
}
function OnTriggerEnter ( hit : Collider)
{
	Debug.Log("collision working");
		if(hit.gameObject.tag == "Enemy")
		{
			Debug.Log("killed");
			Debug.Log("animation");
			Instantiate(splatter, transform.position , Quaternion.EulerAngles(90,0,0));
			audio.PlayOneShot(spitting);
			GameObject.Destroy (this.gameObject);
				
		}	
}
