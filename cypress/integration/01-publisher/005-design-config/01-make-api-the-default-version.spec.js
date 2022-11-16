
/*
 * Copyright (c) 2021, WSO2 Inc. (http://www.wso2.org) All Rights Reserved.
 *
 * WSO2 Inc. licenses this file to you under the Apache License,
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

describe("publisher-005-01 : Verify authorized user can make the api the default version", () => {
    const publisher = 'publisher';
    const password = 'test123';
    const carbonUsername = 'admin';
    const carbonPassword = 'admin';
    const apiName = 'newapi' + Math.floor(Date.now() / 1000);
    const apiVersion = '1.0.0';

    before(function () {
        //cy.carbonLogin(carbonUsername, carbonPassword);
        //cy.addNewUser(publisher, ['Internal/publisher', 'Internal/creator', 'Internal/everyone'], password);
    })
    it.only("Authorized user makes the api the default version", () => {
        cy.loginToPublisher(publisher, password);
        cy.createAPIByRestAPIDesign(apiName, apiVersion);
        cy.get('[data-testid="left-menu-itemDesignConfigurations"]').click();
        cy.get('[data-testid="default-version-yes"]').click();
        cy.get('[data-testid="design-config-save-btn"]').click();
        cy.get('[data-testid="design-config-save-btn"]').then(function () {
            cy.get('[data-testid="default-version-yes"] input').should('be.checked');
        });
    });

    after(function () {
          // Test is done. Now delete the api
          cy.deleteApi(apiName, apiVersion);

        //cy.visit('carbon/user/user-mgt.jsp');
        //cy.deleteUser(publisher);
    })
});