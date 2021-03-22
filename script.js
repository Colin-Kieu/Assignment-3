document.getElementById('jd').addEventListener('click', text1)
document.getElementById('school').addEventListener('click', text2)
document.getElementById('outlook').addEventListener('click', text5)
document.getElementById('salary').addEventListener('click', text6)
document.getElementById('vocation').addEventListener('click', text7)

function text1 () {
  document.getElementById('text1').style.display = 'block'
  document.getElementById('text2').style.display = 'none'
  document.getElementById('text3').style.display = 'none'
  document.getElementById('text4').style.display = 'none'
  document.getElementById('text5').style.display = 'none'
  document.getElementById('text6').style.display = 'none'
  document.getElementById('text7').style.display = 'none'
}

function text2 () {
  document.getElementById('text1').style.display = 'none'
  document.getElementById('text2').style.display = 'block'
  document.getElementById('text3').style.display = 'block'
  document.getElementById('text4').style.display = 'block'
  document.getElementById('text5').style.display = 'none'
  document.getElementById('text6').style.display = 'none'
  document.getElementById('text7').style.display = 'none'
}

function text5 () {
  document.getElementById('text1').style.display = 'none'
  document.getElementById('text2').style.display = 'none'
  document.getElementById('text3').style.display = 'none'
  document.getElementById('text4').style.display = 'none'
  document.getElementById('text5').style.display = 'block'
  document.getElementById('text6').style.display = 'none'
  document.getElementById('text7').style.display = 'none'
}

function text6 () {
  document.getElementById('text1').style.display = 'none'
  document.getElementById('text2').style.display = 'none'
  document.getElementById('text3').style.display = 'none'
  document.getElementById('text4').style.display = 'none'
  document.getElementById('text5').style.display = 'none'
  document.getElementById('text6').style.display = 'block'
  document.getElementById('text7').style.display = 'none'
}

function text7 () {
  document.getElementById('text1').style.display = 'none'
  document.getElementById('text2').style.display = 'none'
  document.getElementById('text3').style.display = 'none'
  document.getElementById('text4').style.display = 'none'
  document.getElementById('text5').style.display = 'none'
  document.getElementById('text6').style.display = 'none'
  document.getElementById('text7').style.display = 'block'
}
