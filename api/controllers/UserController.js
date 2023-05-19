module.exports = {
  async create(req, res) {
    try {
      let params = req.allParams();
      console.log(params)
      if (!params.myits_id) {
        return res.badRequest({ err: "Mohon mengisi MyITS ID" });
      }
      if (!params.name) {
        return res.badRequest({ err: "Mohon mengisi nama" });
      }
      if (!params.type) {
        return res.badRequest({ err: "Mohon mengisi jenis" });
      }

      const results = await User.create({
        myits_id: params.myits_id,
        name: params.name,
        type: params.type,
        role: params.type,
      });
      return res.ok(results);
    } catch (error) {
      return res.serverError(error);
    }
  },

  async find(req, res) {
    try {
      const users = await User.find();
      return res.ok(users);
    } catch (error) {
      return res.serverError(error);
    }
  },

  async findOne(req, res) {
    try {
      const user = await User.findOne({
        id: req.params.id,
      });
      return res.ok(user);
    } catch (error) {
      return res.serverError(error);
    }
  },

  async update(req, res) {
    try {
      let params = req.allParams();
      let attributes = {};
      if (params.myits_id) {
        attributes.myits_id = params.myits_id;
      }
      if (params.name) {
        attributes.name = params.name;
      }
      if (params.type) {
        attributes.type = params.type;
        attributes.role = params.type;
      }

      const results = await User.update(
        {
          id: req.params.id,
        },
        attributes,
        {
          updatedAt: Date.now(),
        }
      );
      return res.ok(results);
    } catch (error) {
      return res.serverError(error);
    }
  },

  async delete(req, res) {
    try {
      const results = await User.destroy({
        id: req.params.id,
      });
      return res.ok(results);
    } catch (error) {
      return res.serverError(error);
    }
  },
};
