using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class changeColor : MonoBehaviour {
	public Color startColor;
	public Color endColor;
	public float speed = 1.0f;
	float startTime;
	void onMouseEnter(){
		startTime = Time.time;
	}

	void onMouseExit(){
		float t = (Time.time - startTime) * speed;
		GetComponent<Renderer> ().material.color = Color.Lerp (startColor,endColor,t);
	}
}
