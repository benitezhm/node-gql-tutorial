function feed(parent, args, context, info) {
  return context.prisma.link.findMany();
}

function link(parent, args, context) {
  return context.link.findOne({
    where: { id: args.id },
  });
}

module.exports = {
  feed,
  link
};
