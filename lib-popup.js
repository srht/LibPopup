/* Simple popup creator, not dependend to any library 
 * By Serhat Köroğlu. http://serhatkoroglu.wordpress.com
 * Append the js and css file to head tag. 
 * Then call lipo.create('content whatever') inside body. 
 */


var libPopup=function(){
			this.kapatText='X'
			this.create=function(content){
			var contDiv=createElement('div',[{'name':'id','value':'blanket'}]);
			document.body.appendChild(contDiv)
			var window=createElement('div',[{'name':'id','value':'popUpDiv'}]);
			var link=createElement('a',[{'name':'id','value':'pkapat'},{'name':'href','value':'javascript:;'}]);
			link.addEventListener('click',function(){
				pclose();
			})
			var text=document.createTextNode(this.kapatText);
			link.appendChild(text);
			window.appendChild(link);
			document.body.appendChild(window);
			}
			
			this.lopen=function(){
				document.getElementById('blanket').style.display='block';
				document.getElementById('popUpDiv').style.display='block';
			}
			
			function createElement(element,attributes){
				var div= document.createElement(element);
				for(var i=0;i<attributes.length;i++){
					var attr= document.createAttribute(attributes[i].name);
					attr.value=attributes[i].value;
					div.setAttributeNode(attr);
				}
				return div;
			}
			
			function pclose(){
				document.getElementById('blanket').style.display='none';
				document.getElementById('popUpDiv').style.display='none';
			}
	}
	
var lipo=new libPopup()