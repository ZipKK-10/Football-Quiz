describe('Start', () => {
    it("should allow to work my quiz", () => {
        cy.visit("http://localhost:8000/");
        cy.get("#start-btn").click();

        cy.get(".quiz-container").should("be.visible")  // questions are visible

        //1
        cy.get("#answerA").click();  // +1
        cy.get(".next-btn").click();  // get another answer

        //2
        cy.get("#answerB").click();  // +1
        cy.get(".next-btn").click();  // get another answer

        //3
        cy.get("#answerD").click();  // +1
        cy.get(".next-btn").click();  // get another answer

        //4
        cy.get("#answerA").click();  // +1
        cy.get(".next-btn").click();  // get another answer

        //5
        cy.get("#answerC").click();  // wrong answer
        cy.get(".next-btn").click();  // get another answer

        //6
        cy.get("#answerB").click();  // +1
        cy.get(".next-btn").click();  // get another answer

        //7
        cy.get("#answerC").click();  // +1
        cy.get(".next-btn").click();  // get another answer

        //8
        cy.get("#answerC").click();  // +1
        cy.get(".next-btn").click();  // get another answer

        //9
        cy.get("#answerD").click();  // +1
        cy.get(".next-btn").click();  // get another answer

        //10
        cy.get("#answerD").click();  // +1
        cy.get(".next-btn").click();  // get another answer

        //11
        cy.get("#answerA").click();  // wrong answer
        cy.get(".next-btn").click();  // get another answer
        
        //12
        cy.get("#answerB").click();  // +1
        cy.get(".next-btn").click();  // get another answer

        //13
        cy.get("#answerA").click();  // +1
        cy.get(".next-btn").click();  // get another answer

        //14
        cy.get("#answerB").click();  // +1
        cy.get(".next-btn").click();  // get another answer

        //15
        cy.get("#answerC").click();  // +1
        cy.get(".next-btn").click();  // get another answer

        //16
        cy.wait(24000)    // timer end
        cy.get(".answered").should("be.visible")     // set answered class
        cy.get("#answers div").should('have.class','answered')   // all answers are disabled, 0 point  
        cy.get(".next-btn").click();  // get another answer

        //17
        cy.get("#answerD").click();  // +1
        cy.get(".next-btn").click();  // get another answer

        //18
        cy.get("#answerA").click();  // +1
        cy.get(".next-btn").click();  // get another answer

        //19
        cy.get("#answerB").click();  // +1
        cy.get(".next-btn").click();  // get another answer

        //20
        cy.get("#answerA").click();  // +1
        cy.get(".next-btn").click();  // get to result
   
        cy.get(".score-container").should("be.visible")      // visible score of 17 points
        cy.get("#home-btn").click();    // go to home page and end quiz
    });
});