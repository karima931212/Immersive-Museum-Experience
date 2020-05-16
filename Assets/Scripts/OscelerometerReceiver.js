import System.IO;
private var minInput : float = 0; //min value for OSCulator
private var maxInput : float = 20; //max value from OSCulator
private var minXOutput : float = -10; //min value for OSCulator
private var maxXOutput : float = 10; //max value from OSCulator
private var minYOutput : float = 10; //min value for OSCulator
private var maxYOutput : float = 22; //max value from OSCulator
private var minZOutput : float = -300; //min value for OSCulator
private var maxZOutput : float = -100; //max value from OSCulator
private var minThetaOutput : float = -0.3; //min value for OSCulator
private var maxThetaOutput : float = 0.9; //max value from OSCulator
private var minRhoOutput : float = -0.4; //min value for OSCulator
private var maxRhoOutput : float = 0.4; //max value from OSCulator
public var r1 : GameObject;
public var r2 : GameObject;
public var r3 : GameObject;
public var r4 : GameObject;
public var r5 : GameObject;
public var r6 : GameObject;
public var r7 : GameObject;
public var r8 : GameObject;
public var r9 : GameObject;
public var r10 : GameObject;
public var r11 : GameObject;
public var r12 : GameObject;
public var r13 : GameObject;
public var r14 : GameObject;
public var r15 : GameObject;
public var r16 : GameObject;
public var nameFile: String;
public var otherGameObject :  GameObject;

private var hThresh : float = 5.5;
private var lThresh : float = 3.5;
private var face : float;
private var leftEye : float;
private var rightEye : float;
private var leftEyeBrow : float;
private var rightEyeBrow : float;
private var mouthHeight : float;
private var mouthHeight2 : float;
public var snapshot : boolean = true;
public var rightEyeRec : boolean;
public var leftEyeRec : boolean;
public var rightEyeBrowRec : boolean;
public var leftEyeBrowRec : boolean;
public var mouth : boolean;
private var fileCounter : int = 0;
private var auo: AudioListener;
private var cub1: Renderer;
private var cub2: Renderer;
private var cub3: Renderer;
private var cub4: Renderer;
private var cub5: Renderer;
private var cub6: Renderer;
private var cub7: Renderer;
private var cub8: Renderer;
private var cub9: Renderer;
private var cub10: Renderer;
private var cub11: Renderer;
private var cub12: Renderer;
private var cub13: Renderer;
private var cub14: Renderer;
private var cub15: Renderer;
private var cub16: Renderer;
//private var screenCap: Texture2D;
//var ls:UnityEngine.SceneManagement.SceneManager;
public var startColor : Color;
public var endColor1 : Color;
public var endColor2 : Color;
public var endColor3 : Color;
public var endColor4 : Color;
public var endColor5 : Color;
public var endColor6 : Color;
public var endColor7 : Color;
public var endColor8 : Color;
public var endColor9 : Color;
public var endColor10 : Color;
public var endColor11 : Color;
public var endColor12 : Color;
public var endColor13 : Color;
public var endColor14 : Color;
public var endColor15 : Color;
public var endColor16 : Color;
public var speed : float =1.0f;
private var startTime:float;

function Start ()
{
	    rightEyeRec= false;
        leftEyeRec = false;
		rightEyeBrowRec = false;
		leftEyeBrowRec = false;
		mouth = false;
		auo = otherGameObject.GetComponent(AudioListener);
		cub1 = r1.GetComponent(Renderer);
		cub2 = r2.GetComponent(Renderer);
		cub3 = r3.GetComponent(Renderer);
		cub4 = r4.GetComponent(Renderer);
		cub5 = r5.GetComponent(Renderer);
		cub6 = r6.GetComponent(Renderer);
		cub7 = r7.GetComponent(Renderer);
		cub8 = r8.GetComponent(Renderer);
		cub9 = r9.GetComponent(Renderer);
		cub10 = r10.GetComponent(Renderer);
		cub11 = r11.GetComponent(Renderer);
		cub12 = r12.GetComponent(Renderer);
		cub13 = r13.GetComponent(Renderer);
		cub14 = r14.GetComponent(Renderer);
		cub15 = r15.GetComponent(Renderer);
		cub16 = r16.GetComponent(Renderer);
		startTime = Time.time;
		//auo.pause = true;
      
}

function OSCMessageReceived(message : OSC.NET.OSCMessage)
{
//if (Input.GetKeyUp (KeyCode.Mouse0)) {
//				
//				nameFile = "capture";
//				nameFile += fileCounter;
//				nameFile += ".png";
//				fileCounter++;
//				ScreenCapture.CaptureScreenshot(nameFile);
//				Debug.Log(nameFile);
//				myTexture = Resources.Load("namefile") as Texture;
//				shot = true;
//		}
//        if(message.Address == "/pose/position")
//        {        
//               	if(message.Values.Count == 2)
//                {
////                        var targetPosition : Vector2 = Vector2(Map(message.Values[0], minInput, maxInput, minXOutput, maxXOutput,true),
////                        									   Map(message.Values[1], minInput, maxInput, minYOutput, maxYOutput,true));
////                        transform.position.x = targetPosition.x;
////                        transform.position.y = targetPosition.y;
//                }
//                else
//                {
//                        Debug.LogError("/pose/position has the wrong number of args");
//                }
//        }
// 		else if(message.Address == "/pose/scale")
//        {
//                if(message.Values.Count == 1)
//                {
////                        var targetZPosition : float = Map(message.Values[0], minInput, maxInput, minZOutput, maxZOutput,true);
////                        transform.position.z = targetZPosition;
//                }
//                else
//                {
//                        Debug.LogError("/pose/scale has the wrong number of args");
//                }
//        }
//		else if(message.Address == "/pose/orientation")
//        {
//                if(message.Values.Count == 3)
//                {
////                        //Debug.Log("values are " + message.Values[0] + " " + message.Values[1]);
////                        var targetOrientation : Vector2 = Vector2(Map(message.Values[0],minInput,maxInput, minThetaOutput, maxThetaOutput,true),
////                        											Map(message.Values[1],minInput,maxInput, minRhoOutput, maxRhoOutput,true));
////                        transform.rotation.x = targetOrientation.x;
////                        transform.rotation.y = targetOrientation.y;
//                }
//                else
//                {
//                        Debug.LogError("/pose/orientation has the wrong number of args");
//                }
//        }
if(message.Address == "/pose/scale")
        {
                if(message.Values.Count == 1)
                {   
                     var targetZPosition : float = Map(message.Values[0], minInput, maxInput, minZOutput, maxZOutput,true);
                     var volumn : float = Map(message.Values[0], minInput, maxInput, 0.0, 1.0,true);
                    // transform.position.z = targetZPosition;
                     auo.volume = volumn;
                }
                else
                {
                        Debug.LogError("/pose/scale has the wrong number of args");
                }
        }
        else if(message.Address == "/eye/left")
        {
				if(message.Values.Count == 1)
                {
		        	leftEye = message.Values[0];   
        			leftEyeRec = true;     			 	
                }
                else
                {
                        Debug.LogError("/eye/left has the wrong number of args");
                }
        }
        else if(message.Address == "/eye/right")
        {
                if(message.Values.Count == 1)
                {
		        	rightEye = message.Values[0]; 
		        	rightEyeRec = true;            			 	
                }
                else
                {
                        Debug.LogError("/eye/right has the wrong number of args");
                }
        }
        else if(message.Address == "/eyebrow/left")
        {
				if(message.Values.Count == 1)
                {
		        	leftEyeBrow = message.Values[0];  
		        	leftEyeBrowRec = true;          			 	
                }
                else
                {
                        Debug.LogError("/eyebrow/left has the wrong number of args");
                }
        }
        else if(message.Address == "/eyebrow/right")
        {
                if(message.Values.Count == 1)
                {
		        	rightEyeBrow = message.Values[0]; 
		        	rightEyeBrowRec = true;            			 	
                }
                else
                {
                        Debug.LogError("/eyebrow/right has the wrong number of args");
                }
        }


        else if(message.Address == "/mouth/height")
        {
                if(message.Values.Count == 1)
                {
		        	mouthHeight = message.Values[0];  
		        	mouthHeight2 = message.Values[0]; 
		        	Debug.Log(Mathf.Abs(mouthHeight2-mouthHeight));          			 	
                }
                else
                {
                        Debug.LogError("/mouth/height has the wrong number of args");
                }
        }

    
	if(mouthHeight>0.1)
			{
			var t: float = (Time.time - startTime) * speed;
			cub1.material.color = Color.Lerp (startColor,endColor1,t);
			cub2.material.color = Color.Lerp (startColor,endColor2,t);
			cub3.material.color = Color.Lerp (startColor,endColor3,t);
			cub4.material.color = Color.Lerp (startColor,endColor4,t);
			cub5.material.color = Color.Lerp (startColor,endColor5,t);
			cub6.material.color = Color.Lerp (startColor,endColor6,t);
			cub7.material.color = Color.Lerp (startColor,endColor7,t);
			cub8.material.color = Color.Lerp (startColor,endColor8,t);
			cub9.material.color = Color.Lerp (startColor,endColor9,t);
			cub10.material.color = Color.Lerp (startColor,endColor10,t);
			cub11.material.color = Color.Lerp (startColor,endColor11,t);
			cub12.material.color = Color.Lerp (startColor,endColor12,t);
			cub13.material.color = Color.Lerp (startColor,endColor13,t);
			cub14.material.color = Color.Lerp (startColor,endColor14,t);
			cub15.material.color = Color.Lerp (startColor,endColor15,t);
			cub16.material.color = Color.Lerp (startColor,endColor16,t);
			}else{
			var t1: float = (Time.time - startTime) * speed;
			cub1.material.color = Color.Lerp (endColor1,startColor,t1);
			cub2.material.color = Color.Lerp (endColor2,startColor,t1);
			cub3.material.color = Color.Lerp (endColor3,startColor,t1);
			cub4.material.color = Color.Lerp (endColor4,startColor,t1);
			cub5.material.color = Color.Lerp (endColor5,startColor,t1);
			cub6.material.color = Color.Lerp (endColor6,startColor,t1);
			cub7.material.color = Color.Lerp (endColor7,startColor,t1);
			cub8.material.color = Color.Lerp (endColor8,startColor,t1);
			cub9.material.color = Color.Lerp (endColor9,startColor,t1);
			cub10.material.color = Color.Lerp (endColor10,startColor,t1);
			cub11.material.color = Color.Lerp (endColor11,startColor,t1);
			cub12.material.color = Color.Lerp (endColor12,startColor,t1);
			cub13.material.color = Color.Lerp (endColor13,startColor,t1);
			cub14.material.color = Color.Lerp (endColor14,startColor,t1);
			cub15.material.color = Color.Lerp (endColor15,startColor,t1);
			cub16.material.color = Color.Lerp (endColor16,startColor,t1);
			}
	
	if(rightEyeRec && leftEyeRec && rightEyeBrowRec && leftEyeBrowRec)
	{
		if(snapshot == true)
		{
//			Debug.Log(Mathf.Abs(rightEye-rightEyeBrow));
//			Debug.Log(Mathf.Abs(leftEye-leftEyeBrow));
			if(Mathf.Abs(rightEye-rightEyeBrow)<lThresh)
			{
				Debug.Log("right eye closed");
//				shot();
				nameFile = "capture";
				nameFile += fileCounter;
				nameFile += ".png";
				fileCounter++;
				ScreenCapture.CaptureScreenshot(nameFile);
				snapshot = false;
			}
			else if(Mathf.Abs(leftEye-leftEyeBrow)<lThresh)
			{
				Debug.Log("left eye closed");
				nameFile = "capture";
				nameFile += fileCounter;
				nameFile += ".png";
				fileCounter++;
				ScreenCapture.CaptureScreenshot(nameFile);
				snapshot = false;
			}
		}
		else
		{
			if(Mathf.Abs(rightEye-rightEyeBrow)>hThresh)
			{
				Debug.Log("right eye open");
				snapshot = true;
			}
			else if(Mathf.Abs(leftEye-leftEyeBrow)>hThresh)
			{
				Debug.Log("left eye open");
				snapshot = true;
			}
		}
	}
}
// function shot()//:Texture2D
// { 
// // Make a new texture of the right size and
// // read the camera image into it.
// var tex = new Texture2D(Screen.width, Screen.height, TextureFormat.RGB24, false);
// yield  WaitForEndOfFrame();
// tex.ReadPixels(new Rect(0, 0, Screen.width, Screen.height), 0, 0);
// tex.Apply();
// var bytes = tex.EncodeToPNG();
// 
// SaveTextureToFile(tex,"alcove.png");
// //Destroy (tex);
// 
// //return tex;
// }
// 
//  function SaveTextureToFile( texture: Texture2D,fileName)
//  {
//     var bytes=texture.EncodeToPNG();
//     var file = new File.Open("/Users/dmi/Desktop/FaceBlink" + "/"+fileName,FileMode.Create);
//     var binary= new BinaryWriter(file);
//     binary.Write(bytes);
//     file.Close();
//  }
function Map(value : float, inputMin : float, inputMax : float, outputMin : float, outputMax : float , clamp : boolean) : float
{
        if (Mathf.Abs(inputMin - inputMax) < Mathf.Epsilon)
        {
                return outputMin;
        }
        else
        {
                var outVal = ((value - inputMin) / (inputMax - inputMin) * (outputMax - outputMin) + outputMin);
                if( clamp )
                {
                        if(outputMax < outputMin)
                        {
                                if( outVal < outputMax )outVal = outputMax;
                                else if( outVal > outputMin )outVal = outputMin;
                        }
                        else
                        {
                                if( outVal > outputMax )outVal = outputMax;
                                else if( outVal < outputMin )outVal = outputMin;
                        }
                }
                return outVal;
        }
}
