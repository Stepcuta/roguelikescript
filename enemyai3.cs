using UnityEngine;
using System.Collections;

public class enemyai3 : MonoBehaviour {
	public Transform target;
	public int moveSpeed;
	public int rotationSpeed;
	public int maxdistance;
	public float attackTime;
	public float coolDown;
	private Transform myTransform;
void Awake()
	{ 
		myTransform = transform;
	}

void Start () {
		GameObject go = GameObject.FindGameObjectWithTag("Player");
		target = go.transform;
		attackTime = 0;
		coolDown = 4.0f;

	}

void Update () {
		Debug.DrawLine(target.position, myTransform.position, Color.red); 


			// get the target direction:
			Vector3 targetDir = target.position - myTransform.position;
			
			myTransform.rotation = Quaternion.Slerp(myTransform.rotation, Quaternion.LookRotation(targetDir), rotationSpeed * Time.deltaTime);
			
			

		}
}