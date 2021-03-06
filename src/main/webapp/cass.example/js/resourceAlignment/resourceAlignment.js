/*
 Copyright 2015-2016 Eduworks Corporation and other contributing parties.

 Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
*/

var resourceCommitHooks = [];

function selectResource(me) {
    var url = $(me).parents(".cass-resource").find(".cass-resource-url").text();
    var text = $(me).parents(".cass-resource").find(".cass-resource-name").text();
    $("#selectedResource").attr("url", url).text(text);
    $("#resourceSelector").foundation('close');
}

function selectCompetency(me) {
    var text = $(me).parents(".cass-competency").children(".cass-competency-name").text();
    var url = $(me).parents(".cass-competency").find(".cass-competency-url").text();
    var framework = $("#frameworks").find(".is-active").find(".cass-framework-url").text();
    var description = $(me).parents(".cass-competency").find(".cass-competency-description").text();
    $("#selectedCompetency")
        .attr("url", url)
        .attr("framework", framework)
        .attr("description", description)
        .text(text).show();
    $("#competencySelector").foundation('close');
}

function createAlignment(me) {
    for (var i = 0; i < resourceCommitHooks.length; i++) {
        resourceCommitHooks[i]();
    }
}
