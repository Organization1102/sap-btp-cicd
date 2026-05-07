module.exports = class SequenceHelper {
	constructor (options) {
		this.db = options.db;
		this.sequence = options.sequence;
		this.table = options.table;
		this.field = options.field || "ID";
    }
    
    padZeroes(str,size) {
        var s = str+"";
        while (s.length < (size || 2)) {s = "0" + s;}
        return s;
    }

	getNextNumberString(padNumber) {
		return new Promise((resolve, reject) => {
			let nextNumber = 0;
			switch (this.db.kind) {
				case "hana":
					this.db.run(`SELECT "${this.sequence}".NEXTVAL FROM DUMMY`)
						.then(result => {
							nextNumber = this.padZeroes(result[0][`${this.sequence}.NEXTVAL`],padNumber);
							resolve(nextNumber);
						})
						.catch(error => {
							reject(error);
						});

					break;
				case "sql":
				case "sqlite":
					this.db.run(`SELECT MAX("${this.field}") FROM "${this.table}"`)
						.then(result => {
							nextNumber = this.padZeroes(parseInt(result[0][`MAX("${this.field}")`]) + 1,padNumber);
							resolve(nextNumber);
						})
						.catch(error => {
							reject(error);
						});
					break;
				default:
					reject(new Error(`Unsupported DB kind --> ${this.db.kind}`));
			}
		});
	}

	getNextNumber() {
		return new Promise((resolve, reject) => {
			let nextNumber = 0;
			switch (this.db.kind) {
				case "hana":
					this.db.run(`SELECT "${this.sequence}".NEXTVAL FROM DUMMY`)
						.then(result => {
							console.log ("SEQNEXTVAL "+ this.sequence + " " +this.table);
							nextNumber = result[0][`${this.sequence}.NEXTVAL`];
							resolve(nextNumber);
						})
						.catch(error => {
							reject(error);
						});
					break;
				case "sql":
				case "sqlite":
					this.db.run(`SELECT MAX("${this.field}") FROM "${this.table}"`)
						.then(result => {
							nextNumber = parseInt(result[0][`MAX("${this.field}")`]) + 1;
							resolve(nextNumber);
						})
						.catch(error => {
							reject(error);
						});
					break;
				default:
					reject(new Error(`Unsupported DB kind --> ${this.db.kind}`));
			}
		});
	}
};