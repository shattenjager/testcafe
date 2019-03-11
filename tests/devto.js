import { Selector } from 'testcafe'

fixture("DEV Tests")
    .page("http://dev.to");

    test("Check funders's names", async (t) => {
        const aboutLink = Selector('a').withText('About');
        const firstFounder = Selector('b').withText('Ben Halpern');
        const secondFounder = Selector('b').withText('Jess Lee');
        const thirdFounder = Selector('b').withText('Peter Frank');

        await t
            .click(aboutLink)
            .expect(firstFounder.exist).ok()
            .expect(secondFounder.exist).ok()
            .expect(thirdFounder.expect).ok();
    });