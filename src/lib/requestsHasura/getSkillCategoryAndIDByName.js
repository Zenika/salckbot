const { request } = require("../utils/request");

async function getSkillCategoryAndIDByName(name) {
    try {
        const response = await request(`https://staging.hasura.skillz.zenika.com/api/rest/get-skill-category-ID-by-name?name=${name}`, "GET");
        return response.Skill[0];
    }
    catch(e) {
        console.error(e)
    }
}

module.exports.getSkillCategoryAndIDByName = getSkillCategoryAndIDByName;