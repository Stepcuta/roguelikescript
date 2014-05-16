using UnityEngine;
using System.Collections;

public class enemyai2 : MonoBehaviour {
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
		float dist = Vector3.Distance(target.position, transform.position);
		if (dist < 6){ 
			// get the target direction:
			Vector3 targetDir = target.position - myTransform.position;
			targetDir.y = 0; // kill any height difference to avoid tilting
			myTransform.rotation = Quaternion.Slerp(myTransform.rotation, Quaternion.LookRotation(targetDir), rotationSpeed * Time.deltaTime);
			if (dist > 1){ // check min distance
				// only move to the target if farther than min distance

				myTransform.position += myTransform.forward * moveSpeed * Time.deltaTime;
			}
		}
	}
}