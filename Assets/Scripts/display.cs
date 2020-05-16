using UnityEngine;
using System.Collections;

public class display : MonoBehaviour 
{
	// Store more screenshots...
	private int Screen_Shot_Count = 0;
	// Screenshot taking by touch the button.
	public GUITexture Capture_Model;
	public GUITexture Show_Screen;
	public GUITexture Close_Screen;
	// Check the Shot Taken/Not.
	private bool Shot_Taken = false;
	// Name of the File.
	private string Screen_Shot_File_Name, Path_Name;
	private string File_Path, Origin_Path;
	private byte[] Bytes_File;
	private Texture2D Screenshot;
	string url= "/Users/dmi/Desktop/FaceBlink/alcove.png";
	void Update(){
		if (Input.GetKeyUp (KeyCode.Mouse0)) {
			Debug.Log("click");
			StartCoroutine ("LoadImg");
		}
	}


	IEnumerator LoadImg(){
		yield return 0;
		WWW imgLink = new WWW (url);
		yield return imgLink;
		Screenshot = imgLink.texture;
	}

	void OnGUI(){
		GUI.DrawTexture(new Rect(Screen.width/2 - 200, Screen.height/2 - 150, 400, 300), Screenshot);
	
	}
}
//	void Update()
//	{
//
//
//			if (Input.GetKeyUp (KeyCode.Mouse0)) {
//							StartCoroutine ("Capture");
//						}
//
//
//		
//
//
////		if(Shot_Taken == true)
////		{
////			Origin_Path = System.IO.Path.Combine("/Users/dmi/Desktop/FaceBlink/", Screen_Shot_File_Name);
////			// This is the path of my folder.
////			File_Path = "/Users/dmi/Desktop/FaceBlink/" + Screen_Shot_File_Name;
////			if(System.IO.File.Exists(Origin_Path))
////			{
////				System.IO.File.Move(Origin_Path, File_Path);
////				Shot_Taken = false;
////			}
////		}
//	}
//	IEnumerator Capture(){
//		yield return new WaitForEndOfFrame ();
//		// Increament the screenshot count.
//		Screen_Shot_Count++;
//		// Save the screenshot name as Screenshot_1.png, Screenshot_2.png, with date format...
//		Screen_Shot_File_Name = "Screenshot__" + Screen_Shot_Count + System.DateTime.Now.ToString("__yyyy-MM-dd") + ".png";
//		ScreenCapture.CaptureScreenshot(Screen_Shot_File_Name);
//		Shot_Taken = true;
//	}
//	void OnGUI()
//	{
//
//		if(Shot_Taken)
//		{
//			Path_Name = System.IO.Path.Combine("/Users/dmi/Desktop/FaceBlink/", Screen_Shot_File_Name);
//				Bytes_File = System.IO.File.ReadAllBytes(Path_Name);
//				Screenshot = new Texture2D(0, 0, TextureFormat.RGB24, false);
//				Screenshot.LoadImage(Bytes_File);
//
//		}
//
//		if(Screenshot != null)
//		{
//			GUI.DrawTexture(new Rect(Screen.width/2 - 200, Screen.height/2 - 150, 400, 300), Screenshot);
//		}
//	}
//}
//using System.Collections;
//using System.Collections.Generic;
//using UnityEngine;
//using UnityEngine.UI;
//using System.IO;
//
//public class display : MonoBehaviour {
//	public GameObject screenshotPreview;
//	GameObject[] gameObj;
//	Texture2D[] textList;
//
//	string[] files;
//	string pathPreFix; 
//
//	void Start () {
//		//Change this to change pictures folder
//		string path =    @"/Users/dmi/Desktop/FaceBlink";
//
//		pathPreFix = @"file://";
//
//		files = System.IO.Directory.GetFiles(path, "*.png");
//
//		StartCoroutine(LoadImages());
//	}
//
//	private IEnumerator LoadImages(){
//		//load all images in default folder as textures and apply dynamically to plane game objects.
//		//6 pictures per page
//		textList = new Texture2D[files.Length];
//
//		int dummy = 0;
//		foreach(string tstring in files){
//
//			string pathTemp = pathPreFix + tstring;
//			WWW www = new WWW(pathTemp);
//			yield return www;
//			Texture2D texTmp = new Texture2D(1024, 1024, TextureFormat.DXT1, false);  
//			www.LoadImageIntoTexture(texTmp);
//
//			textList[dummy] = texTmp;
//
//			gameObj[dummy].renderer.material.SetTexture("_MainTex", texTmp);
//			dummy++;
//		}
//
//	}
////	private bool istake = false;
////	public string nameFile;
////	private int fileCounter =0;
////	Texture2D screenCap;
////	bool shot = false;
////
////	// Use this for initialization
////	void Start () {
////		screenCap = new Texture2D (Screen.width, Screen.height, TextureFormat.RGB24, false);	
////	}
////	
////	// Update is called once per frame
////	void Update () {
////		if (Input.GetKeyUp (KeyCode.Mouse0)) {
////			StartCoroutine ("Capture");
////		}
////	}
////
////	void OnGUI(){
////		if (shot) {
////			GUI.DrawTexture (new Rect (100,100,200,200), screenCap,ScaleMode.ScaleToFit);
////		}
////	
////	}
////	IEnumerator Capture(){
////		yield return new WaitForEndOfFrame ();
////		screenCap.ReadPixels (new Rect(0, 0, Screen.width, Screen.height), 0, 0);
////		screenCap.Apply ();
////		shot = true;
////	
////	}
//
//
//}
