import os
from pelican import signals
from pelican.readers import MarkdownReader


def generate_services(generator):
    """Generate custom pages for people based on their articles."""
    # Loop over all articles and filter for 'People' category (optional)
    services_dir = os.path.join(generator.settings["PATH"], "services")
    services = []

    for filename in os.listdir(services_dir):
        if not filename.endswith(".md"):
            continue

        file_path = os.path.join(services_dir, filename)
        reader = MarkdownReader(generator.settings)
        content, metadata = reader.read(file_path)

        context = {
            **metadata,
            "content": content,
        }
        services.append(context)

    generator.context["services"] = services
    generator.context["experience"] = get_data(generator,  "experience-expertise.md")
    generator.context["index_data"] = get_data(generator, "index.md")



def get_data(generator, md_file):
    file_path = os.path.join(generator.settings["PATH"], md_file)
    reader = MarkdownReader(generator.settings)
    content, metadata = reader.read(file_path)
    return {
        **metadata,
        "content": content,
    }


def register():
    """Register the plugin to Pelican's signal system."""
    signals.article_generator_finalized.connect(generate_services)
