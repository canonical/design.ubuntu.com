import flask
import yaml

from canonicalwebteam.flask_base.app import FlaskBase
from canonicalwebteam.templatefinder import TemplateFinder


app = FlaskBase(
    __name__,
    "design.ubuntu.com",
    template_folder="../templates",
    static_folder="../assets",
    template_404="404.html",
)


@app.context_processor
def global_template_context():
    with open("_data/downloads.yaml", "r") as stream:
        downloads = yaml.safe_load(stream)

    return {
        "downloads": downloads,
        "path": flask.request.path,
    }


template_finder_view = TemplateFinder.as_view("template_finder")


app.add_url_rule("/", view_func=template_finder_view)
app.add_url_rule("/<path:subpath>", view_func=template_finder_view)
