using UnityEngine;
using System.Collections;

public class playerCollision : MonoBehaviour {

	void OnTriggerEnter(Collider other) {

		if (other.tag == "Enemy") {
						Debug.Log ("Collide!" + other.tag);
			Destroy (other, 1);
				}
		
	}
}
