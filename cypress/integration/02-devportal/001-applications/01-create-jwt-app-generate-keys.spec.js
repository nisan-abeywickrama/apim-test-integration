/*
 * Copyright (c) 2021, WSO2 Inc. (http://www.wso2.org) All Rights Reserved.
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *  
 * http://www.apache.org/licenses/LICENSE-2.0
 *  
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
describe("devportal-001-01 : Verify creating an JWT token based application in devloper portal", () => {
    const appName = 'jwtapplication' + Math.floor(Date.now() / 1000);
    const appDescription = 'JWT application description';
    const developer = 'developer';
    const password = 'test123';
    const carbonUsername = 'admin';
    const carbonPassword = 'admin';

    before(function(){
        //cy.carbonLogin(carbonUsername, carbonPassword);
        //cy.addNewUser(developer, ['Internal/subscriber', 'Internal/everyone'], password);
    })
    it.only("Create JWT token based application in developer portal", () => {
        cy.loginToDevportal();
        cy.createApp(appName, appDescription);
    })

    after(() => {
        cy.visit('/devportal/applications?tenant=carbon.super');
        cy.get(`[data-testid="delete-${appName}-btn"]`, {timeout: 30000});
        cy.get(`[data-testid="delete-${appName}-btn"]`).click();
        cy.get(`[data-testid="application-delete-confirm-btn"]`).click();
    })

    after(() => {
        //cy.visit('carbon/user/user-mgt.jsp');
        //cy.deleteUser(developer);
    })
})