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

    experience_file = os.path.join(generator.settings["PATH"], "experience-expertise.md")
    reader = MarkdownReader(generator.settings)
    content, metadata = reader.read(experience_file)
    generator.context["experience"] = {
        **metadata,
        "content": content,
    }



def register():
    """Register the plugin to Pelican's signal system."""
    signals.article_generator_finalized.connect(generate_services)
