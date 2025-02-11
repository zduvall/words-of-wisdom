# Use the official Jekyll image as a base
FROM jekyll/jekyll:4

# Set the working directory inside the container
WORKDIR /srv/jekyll

# Copy Gemfile and Gemfile.lock (if present)
COPY Gemfile* /srv/jekyll/

# Adjust permissions so the jekyll user can write to the directory,
# then install dependencies.
RUN chown -R jekyll:jekyll /srv/jekyll && bundle install

# Copy the rest of your site into the container.
# (This is overridden by the volume mapping in docker-compose.)
COPY . /srv/jekyll

# Expose port 4000 for Jekyll
EXPOSE 4000

# Use the Jekyll serve command with watch enabled.
# The "--force_polling" flag helps with file change detection in Docker.
CMD ["jekyll", "serve", "--watch", "--force_polling", "--host", "0.0.0.0"]
