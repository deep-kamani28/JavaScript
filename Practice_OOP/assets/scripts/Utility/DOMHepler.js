class DOMHelper{
    static moveElement(elementId,newDestinationSelector){
        const element=document.getElementById(elementId);
        const destinationElement=document.querySelector(newDestinationSelector);
        destinationElement.append(element);
        element.scrollIntoView({behavior:'smooth'});
    }

    static clearEventListener(element){
        const clonedElement=element.cloneNode(true);
        element.replaceWith(clonedElement);
        return clonedElement;
    }
}