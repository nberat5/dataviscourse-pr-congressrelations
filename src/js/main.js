/**
 * Created by Curtis on 11/19/2015.
 */
/************************************************
 * main.js
 ************************************************
 *
 * This script represents an overall controller,
 * which calls the functions included in other
 * scripts. This script:
 *
 *      * Loads the data in the json files
 *	* Runs the visualizations once the data
 *	  is loaded
 *	* Creates a dispatcher for event handling
  */

// dispatch creation
/* 
selectionChanged:
Reloads all views when the member selection has
changed.
*/
dispatch = d3.dispatch("selectionChanged");

// Data loading
// Code inspired by: https://groups.google.com/forum/#!msg/d3-js/3Y9VHkOOdCM/YnmOPopWUxQJ

// First load and assign metadata
d3.json("data/Senate114Metadata.json", function(md) {
    congress.metaData = md;
    
    // Now load and assign record data
    d3.json("data/SenateRecord114.json", function(cd) {
	congress.data = cd;
	congress.clearMembers();
	congress.getAgreementPercent();
	
	// Call visualizations
    });
});