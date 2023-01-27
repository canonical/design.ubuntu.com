import flask
import yaml

from canonicalwebteam import image_template
from canonicalwebteam.flask_base.app import FlaskBase
from canonicalwebteam.templatefinder import TemplateFinder


app = FlaskBase(
    __name__,
    "design.ubuntu.com",
    template_folder="../templates",
    static_folder="../static",
    template_404="404.html",
)

with open("_data/resources.yaml", "r") as stream:
    parsed_resources = yaml.safe_load(stream)

with open("_data/icons.yaml", "r") as stream:
    parsed_icons = yaml.safe_load(stream)

resources_data = {
    "logos": parsed_resources,
    "icons": parsed_icons,
}


@app.context_processor
def global_template_context():
    return {
        "resources_data": resources_data,
        "path": flask.request.path,
    }


@app.context_processor
def utility_processor():
    return {"image": image_template}


template_finder_view = TemplateFinder.as_view("template_finder")

app.add_url_rule("/", view_func=template_finder_view)
app.add_url_rule("/<path:subpath>", view_func=template_finder_view)
