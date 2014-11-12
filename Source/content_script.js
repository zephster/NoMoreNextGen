walk(document.body);

function walk(node) 
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;

	v = v.replace(/\bNext-Gen\b/g, "Current-Gen");
	v = v.replace(/\bNext-gen\b/g, "Current-gen");
	v = v.replace(/\bnext-Gen\b/g, "current-Gen");
	v = v.replace(/\bnext-gen\b/g, "current-gen");
	v = v.replace(/\bNext Gen\b/g, "Current Gen");
	v = v.replace(/\bNext gen\b/g, "Current Gen");
	v = v.replace(/\bnext Gen\b/g, "Current Gen");
	v = v.replace(/\bnext gen\b/g, "current gen");
	
	textNode.nodeValue = v;
}


