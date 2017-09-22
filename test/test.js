import kirby, { metaKnight, modernKirby } from '../src/main';

describe('kirby', function(){
  describe('toKirby', function(){
    it('should turn an array of strings into a kirby delimited string', function(){
      var input = ['a', 'b', 'c', 'd'];
      var output = kirby(input);
      expect(output).toEqual("a(>'')>b(>'')>c(>'')>d");
    });

    it("should add no kirbies if the array is a single string", function(){
      var input = ['a'];
      var output = kirby(input);
      expect(output).toEqual("a");
    });

    it("should do nothing if the array is empty", function(){
      var input = [];
      var output = kirby(input);
      expect(output).toEqual("");
    });
  });

  describe("fromKirby", function(){
    it("should return an array of strings from a kirby delimited string", function(){
      var input = "a(>'')>b";
      var output = kirby(input);
      expect(output).toContain("a");
      expect(output).toContain("b");
    });

    it("should maintain any special characters from the origin string", function(){
      var input = "a\n(>'')>\tb\t";
      var output = kirby(input);
      expect(output).toContain("a\n");
      expect(output).toContain("\tb\t");
    });

    it("should do nothing if the incoming string is empty", function(){
      var input = "";
      var output = kirby(input);
      expect(output.length).toEqual(0);
    });

    it("should do nothing if the incoming string contains no kirbies", function(){
      var input = "a b ( c) d > e '' f ) > g";
      var output = kirby(input);
      expect(output).toContain("a b ( c) d > e '' f ) > g");
      expect(output.length).toEqual(1);
    });
  });
});

describe('meta knight', () => {
	describe('toMetaKnight', function(){
		it('should turn an array of strings into a metaKnight delimited string', function(){
			var input = ['a', 'b', 'c', 'd'];
			var output = metaKnight(input);
			expect(output).toEqual("a<(*^*)>b<(*^*)>c<(*^*)>d");
		});

		it("should add no meta knights if the array is a single string", function(){
			var input = ['a'];
			var output = metaKnight(input);
			expect(output).toEqual("a");
		});

		it("should do nothing if the array is empty", function(){
			var input = [];
			var output = metaKnight(input);
			expect(output).toEqual("");
		});
	});

	describe("fromMetaKnight", function(){
		it("should return an array of strings from a metaKnight delimited string", function(){
			var input = "a<(*^*)>b";
			var output = metaKnight(input);
			expect(output).toContain("a");
			expect(output).toContain("b");
		});

		it("should maintain any special characters from the origin string", function(){
			var input = "a\n<(*^*)>\tb\t";
			var output = metaKnight(input);
			expect(output).toContain("a\n");
			expect(output).toContain("\tb\t");
		});

		it("should do nothing if the incoming string is empty", function(){
			var input = "";
			var output = metaKnight(input);
			expect(output.length).toEqual(0);
		});

		it("should do nothing if the incoming string contains no meta knights", function(){
			var input = "a b ( c) d > e '' f ) > g";
			var output = metaKnight(input);
			expect(output).toContain("a b ( c) d > e '' f ) > g");
			expect(output.length).toEqual(1);
		});
	});
});

describe('modern kirby', () => {
	describe('toModernKriby', function(){
		it('should turn an array of strings into a modern kirby delimited string', function(){
			var input = ['a', 'b', 'c', 'd'];
			var output = modernKirby(input);
			expect(output).toEqual("a༼ つ ◕_◕ ༽つb༼ つ ◕_◕ ༽つc༼ つ ◕_◕ ༽つd");
		});

		it("should add no modern kirbys if the array is a single string", function(){
			var input = ['a'];
			var output = modernKirby(input);
			expect(output).toEqual("a");
		});

		it("should do nothing if the array is empty", function(){
			var input = [];
			var output = modernKirby(input);
			expect(output).toEqual("");
		});
	});

	describe("fromModernKirby", function(){
		it("should return an array of strings from a modern kirby delimited string", function(){
			var input = "a༼ つ ◕_◕ ༽つb";
			var output = modernKirby(input);
			expect(output).toContain("a");
			expect(output).toContain("b");
		});

		it("should maintain any special characters from the origin string", function(){
			var input = "a\n༼ つ ◕_◕ ༽つ\tb\t";
			var output = modernKirby(input);
			expect(output).toContain("a\n");
			expect(output).toContain("\tb\t");
		});

		it("should do nothing if the incoming string is empty", function(){
			var input = "";
			var output = modernKirby(input);
			expect(output.length).toEqual(0);
		});

		it("should do nothing if the incoming string contains no modern kirbys", function(){
			var input = "a b ( c) d > e '' f ) > g";
			var output = modernKirby(input);
			expect(output).toContain("a b ( c) d > e '' f ) > g");
			expect(output.length).toEqual(1);
		});
	});
});
