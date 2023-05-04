test("truc cool", () => {
    expect(1+1).toBe(2);
});

test("Format permis", () => {
    try {
      form.permis = "A9EZ";
    } catch (e) {
      if (e instanceof Error) {
        expect(e.message ).toBe("Le format du permis est invalide");
      }
    }
});
test("Format date infraction", () => {
    try {
      form.dateInf = "2011-22-22";
    } catch (e) {
      if (e instanceof Error) {
        expect(e.message ).toBe("Le format de la date est invalide");
      }
    }
});
test("Format date infraction", () => {
    try {
      form.dateInf = "2011/01/22";
    } catch (e) {
      if (e instanceof Error) {
        expect(e.message ).toBe("Le format de la date est invalide");
      }
    }
});
test("Format date infraction", () => {
    try {
      form.dateInf = "2011-22-22";
    } catch (e) {
      if (e instanceof Error) {
        expect(e.message ).toBe("Le format de la date est invalide");
      }
    }
});
test("id unique", () => {
    try {
      form.id != ;
    } catch (e) {
      if (e instanceof Error) {
        expect(e.message ).toBe("Le format de l'id est invalide");
      }
    }
});

