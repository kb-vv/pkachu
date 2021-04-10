const string = `.skin * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.skin *::after,
.skin *::before {
  box-sizing: border-box;
}
.skin {
  position: relative;
  background: #ffe600;
  min-height: 50vh;
}
.nose {
  width: 0;
  height: 0;
  border: 10px solid black;
  border-color: black transparent transparent;
  position: relative;
  border-bottom: none;
  left: 50%;
  top: 145px;
  margin-left: -10px;
  z-index: 10;
}
@keyframes wave {
  0%{
    transform: rotate(0deg);
  }
  33%{
    transform: rotate(10deg);
  }
  66%{
    transform: rotate(-10deg);
  }
  100%{
    transform: rotate(0deg);
  }
}
.nose:hover{
  transform-origin:center bottom ;
  animation: wave 300ms infinite linear;
}
.yuan {
  position: absolute;
  width: 20px;
  height: 6px;
  background-color: black;
  top: -16px;
  left: -10px;
  border-radius: 10px 10px 0 0;
}
.eye {
  border: 1px solid #000;
  width: 64px;
  height: 64px;
  position: absolute;
  left: 50%;
  top: 100px;
  margin-left: -32px;
  background-color: #2e2e2e;
  border-radius: 50%;
}
.eye::before {
  content: "";
  width: 25px;
  height: 25px;
  display: block;
  position: relative;
  border-radius: 50%;
  border: 3px solid #000;
  background-color: white;
  left: 8px;
  top: 4px;
}
.eye.left {
  transform: translateX(-100px);
}
.eye.right {
  transform: translateX(100px);
}
.mouth{
  width: 200px;
  height: 200px;
  position: absolute;
  top: 165px;
  left: 50%;
  margin-left: -100px;
}
.mouth .up{
position: relative;
  top: -14px;

}
.mouth .up .lip{
  height: 30px;
  width: 80px ;
  border: 3px solid black;
  border-top: transparent;
  position: absolute;
  z-index: 2;
  background: #ffe600;
}
.mouth .up .lip.left{
  border-radius: 0 0 0 50px;
  border-right: transparent;
  transform: rotate(-15deg) translateX(-32px);
  left: 50%;
  margin-left: -50px;
}
.mouth .up .lip.right{
  border-radius: 0 0 50px 0  ;
  border-left: transparent;
  transform: rotate(15deg) translateX(32px);
  right: 50%;
  margin-right: -50px;
}
.mouth .down{
  height: 180px;
  position: absolute;
  top: 10px;
  width: 100%;
  overflow: hidden;
}
.mouth .down .yuan1{
  border: 3px solid black;
  width: 130px;
  height: 1000px;
  bottom: 0;
  left: 50%;
  margin-left: -65px;
  position: absolute;
  border-radius: 80px/300px;
  background: #9b000a;
  overflow: hidden;
}
.mouth .down .yuan1 .yuan2{
  background: #ff485f;
  width: 200px;
  height: 300px;
  position: absolute;
  left: 50%;
  bottom: -155px;
  margin-left: -100px;
  border-radius: 100px;
}
.face{
  z-index: 5;
  width: 88px;
  height: 88px;
  border:3px solid black;
  position: absolute;
  left: 50%;
  margin-left: -44px;
  top: 200px;
}
.face>img{
  position: absolute;
  top: 50%;
  left: 50%;
}
.face.left img{
  transform: rotateY(180deg);
  transform-origin: 0 0;
}
.face.left{
  transform: translateX(-180px);
  background: #ff0000;
  border-radius: 50%;
}
.face.right{
  transform: translateX(180px);
  background: #ff0000;
  border-radius: 50%;
}
`
export default string