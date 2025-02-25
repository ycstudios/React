
const mainContainer=document.querySelector('#root');


function customRender(reactElement,container){
    // const domElement=document.createElement(reactElement.type)
    // domElement.innerHTML=reactElement.childern;
    // domElement.setAttribute('href',reactElement.props.href)
    // domElement.setAttribute('target',reactElement.props.target)
    // mainContainer.appendChild(domElement)


    const domElement=document.createElement(reactElement.type)
    domElement.innerHTML=reactElement.childern

    for(const prop in reactElement.props){
        domElement.setAttribute(prop,reactElement.props[prop])
    }
    mainContainer.appendChild(domElement)
}

const reactElement={
    type:'a',
    props:{
        href:'https://google.com',
        target:'_blank'
    },
    childern:'click me to visit Google'
}


customRender(reactElement,mainContainer)
