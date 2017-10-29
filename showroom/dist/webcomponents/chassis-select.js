class ChassisSelect extends HTMLElement{constructor(){super(),this.attachShadow({mode:'open'});let a=document.createElement('div');a.insertAdjacentHTML('afterbegin',this.templateString);let b=a.querySelector('template');'content'in b?this.shadowRoot.appendChild(b.content.cloneNode(!0)):b.childNodes.forEach((a)=>{this.shadowRoot.appendChild(a.cloneNode(!0))}),b=null}get templateString(){return`<template><style>@charset UTF-8; @charset "UTF-8";:host{display:flex;contain:content;max-width:100%}:host *{box-sizing:border-box}:host :before{box-sizing:border-box}:host :after{box-sizing:border-box}:host .hidden{display:none;visibility:hidden;opacity:0}chassis-select{display:flex;contain:content;max-width:100%}chassis-select *{box-sizing:border-box}chassis-select :before{box-sizing:border-box}chassis-select :after{box-sizing:border-box}chassis-select .hidden{display:none;visibility:hidden;opacity:0}</style><div class="hidden"><slot name="select"></slot></div><slot name="title"></slot><div class="options"><slot name="options"></slot></div></template>`}connectedCallback(){}_inject(a){a.slot='select',this.appendChild(a),this.menu=a,this.options={};for(let b of a.children)switch(b.nodeName){case'OPTION':this.addOption(this._generateChassisOption(b));break;case'OPTGROUP':this.appendChild(this._generateChassisOptgroup(b));break;default:console.log('OTHER'),console.log(b);}}addOptions(a){a.forEach((a)=>this.addOption(a))}addOption(a,b=this){if(!customElements.get('chassis-option'))return void console.error(`chassis-select requires chassis-option. Please include it in this document's <head> element.`);let c=document.createElement('chassis-option');for(let d in c.dataset.optionId=a.id,c.innerHTML=a.innerHTML,c.slot='options',a.attributes)c.setAttribute(d,a.attributes[d]);b.appendChild(c)}_generateGuid(a='option'){let b=[];for(let c=0;256>c;c++)b[c]=(16>c?'0':'')+c.toString(16);let c=0|4294967295*Math.random(),d=0|4294967295*Math.random(),e=0|4294967295*Math.random(),f=0|4294967295*Math.random();return`${a}_`+b[255&c]+b[255&c>>8]+b[255&c>>16]+b[255&c>>24]+'-'+b[255&d]+b[255&d>>8]+'-'+b[64|15&d>>16]+b[255&d>>24]+'-'+b[128|63&e]+b[255&e>>8]+'-'+b[255&e>>16]+b[255&e>>24]+b[255&f]+b[255&f>>8]+b[255&f>>16]+b[255&f>>24]}_generateChassisOption(a){let b=this._generateGuid();this.options[b]=a;let c=a.getAttribute('label'),d={id:b,attributes:{},innerHTML:c&&''!==c.trim()?c:a.innerHTML};for(let b of a.attributes)d.attributes[b.name]=b.value;return d}_generateChassisOptgroup(a){if(!customElements.get('chassis-optgroup'))return void console.error(`chassis-select requires chassis-optgroup. Please include it in this document's <head> element.`);let b=document.createElement('chassis-optgroup');b.id=this._generateGuid('optgroup');let c=a.getAttribute('label');if(!c||''===c.trim())return void console.error('[ERROR] <optgroup> must have a label attribute!');b.setAttribute('label',c),b.slot='options';let d=a.querySelectorAll('option');for(let c of d)this.addOption(this._generateChassisOption(c),b);return b}}customElements.define('chassis-select',ChassisSelect);