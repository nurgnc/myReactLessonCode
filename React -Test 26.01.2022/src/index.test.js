const items = [1, 2, 3];

describe('arr tests', () => {
  it('arr length === 3', () => {
    expect(items.length).toBe(3);
  });

  test('arr gt 2', () => {
    expect(items.length).toBeGreaterThan(2);
  });

  it('arr total should be 6', () => {
    expect(items.reduce((prev, current) => prev + current)).toEqual(6);
  });
});

// test yazmanın gereklilikleri: kullanıcı hikayesi ve kriterlerinin olması, kriterlerin anlaşılır ve kesin bilgiler olması.

// cypress - test library
// bir interface açar ve testin nerde takıldığını gösterir.
// platform bağımsız hareket eder.
// paket eklendikten sonra kendi klasörünü oluşturur.
// jquery de kullanabildiğimiz her özelliği kullanabiliriz.
//
