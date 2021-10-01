function process(sample, metadata) {
	
    // drop filebeat logs
    if (/filebeat:\s+\d{4}-\d{2}/.test(sample)) {
        return drop();
    } 
	
	return {
		'modifiedInput': null, // manipulated raw data
		'splitEvents': null // an array of strings, treated as separate events
	};
}
// Do not write code here